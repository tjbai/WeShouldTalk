import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import { Post, postState, touchedPost } from "../atoms/postAtom";
import { auth, firestore, storage } from "../firebase/clientApp";

type usePostsProps = {};

const usePosts = () => {
  const [postStateVal, setPostStateVal] = useRecoilState(postState);
  const [user] = useAuthState(auth);
  const router = useRouter();
  const SetAuthModalState = useSetRecoilState(authModalState);

  const onVote = async (post: Post, vote: number) => {
    // check for a user
    if (!user) {
      SetAuthModalState({ open: true, view: "login" });
      return;
    }

    const existingVote = postStateVal.touchedPosts.find(
      (touchedPost) => touchedPost.postId === post.id
    );

    const batch = writeBatch(firestore);
    let voteChange = vote;

    const newPost = { ...post };
    const newPosts = [...postStateVal.posts];
    let newTouchedPosts = [...postStateVal.touchedPosts];

    try {
      const { voteCount } = post;
      // Case where user has interacted
      if (existingVote) {
        const touchedPostRef = doc(
          firestore,
          "users",
          `${user.uid}/touchedPosts/${existingVote.id}`
        );

        // Case where user is removing vote
        if (existingVote.voteValue === vote) {
          newPost.voteCount -= vote;
          newTouchedPosts = newTouchedPosts.filter(
            (touchedPost) => touchedPost.postId !== post.id
          );

          // Remove post from touchedPosts subcollection
          batch.delete(touchedPostRef);
          voteChange *= -1;
        }
        // Case where user votes in the opposite direction
        else {
          newPost.voteCount += 2 * vote;
          const voteIdx = postStateVal.touchedPosts.findIndex(
            (touchedPost) => touchedPost.id === existingVote.id
          );

          newTouchedPosts[voteIdx] = {
            ...existingVote,
            voteValue: vote,
          };

          batch.update(touchedPostRef, {
            voteValue: vote,
          });
          voteChange *= 2;
        }
      }
      // Case where user hasn't interacted
      else {
        const touchedPostRef = doc(
          collection(firestore, "users", `${user.uid}/touchedPosts`)
        );

        // new touchedPost item
        const newTPost: touchedPost = {
          id: touchedPostRef.id,
          postId: post.id!,
          voteValue: vote,
        };

        batch.set(touchedPostRef, newTPost);

        newPost.voteCount += vote;
        newTouchedPosts = [...newTouchedPosts, newTPost];
      }

      // Update firebase
      const postRef = doc(firestore, "discuss", post.id!);
      batch.update(postRef, { voteCount: voteCount + voteChange });

      // Write changes to database
      await batch.commit();

      const postIdx = postStateVal.posts.findIndex(
        (item) => item.id === post.id
      );
      newPosts[postIdx] = newPost;

      // update the post state
      setPostStateVal((prev) => ({
        ...prev,
        posts: newPosts,
        touchedPosts: newTouchedPosts,
      }));
    } catch (error) {
      console.log("onVote", error);
    }
  };

  const onSelect = (post: Post) => {
    setPostStateVal((prev) => ({
      ...prev,
      selectedPost: post,
    }));
    router.push(`/discuss/${post.id}`);
  };

  const onRemove = async (post: Post): Promise<boolean> => {
    try {
      // Create docref
      const removedDocRef = doc(firestore, "discuss", post.id!);

      // Check for image => remove from storage
      if (post.imageURL) {
        const imRef = ref(storage, `posts/${post.id}/image`);
        await deleteObject(imRef);
      }

      // Remove post from firestore
      await deleteDoc(removedDocRef);

      // Update postStateVal
      setPostStateVal((prev) => ({
        ...prev,
        posts: prev.posts.filter((p) => p.id !== post.id),
      }));

      return true;
    } catch (error) {
      console.log("onRemove", error);
      return false;
    }
  };

  // Grab vote state from database
  const getTouchedPosts = async () => {
    const touchedPostsDocs = await getDocs(
      collection(firestore, "users", `${user?.uid}/touchedPosts`)
    );
    const touchedPosts = touchedPostsDocs.docs.map((p) => ({
      id: p.id,
      ...p.data(),
    }));

    setPostStateVal((prev) => ({
      ...prev,
      touchedPosts: touchedPosts as touchedPost[],
    }));
  };

  useEffect(() => {
    if (!user) return;
    getTouchedPosts();
  }, [user]);

  return {
    postStateVal,
    setPostStateVal,
    onVote,
    onSelect,
    onRemove,
  };
};
export default usePosts;
