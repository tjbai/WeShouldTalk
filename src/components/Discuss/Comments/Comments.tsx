import {
  Button,
  Flex,
  NumberDecrementStepper,
  Textarea,
} from "@chakra-ui/react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { Post, postState } from "../../../atoms/postAtom";
import { auth, firestore } from "../../../firebase/clientApp";
import SingleComment from "./SingleComment";

// Pass in user if we ever want to start tracking comments
type CommentsProps = {
  post: Post;
};

export type Comment = {
  id: string;
  creatorID: string;
  commentText: string;
  postID: string;
  createdAt: Timestamp;
};

const Comments: React.FC<CommentsProps> = ({ post }) => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const setPostState = useSetRecoilState(postState);

  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [createCommentLoading, setCreateCommentLoading] = useState(false);
  const [fetchCommentsLoading, setFetchCommentsLoading] = useState(false);

  const onSubmitComment = async () => {
    try {
      const batch = writeBatch(firestore);

      setCreateCommentLoading(true);
      // Create new comment object and store it
      const commentDocRef = doc(collection(firestore, "comments"));
      const newComment: Comment = {
        id: commentDocRef.id,
        creatorID: user!.uid,
        commentText: commentText,
        postID: post.id!,
        createdAt: serverTimestamp() as Timestamp,
      };

      batch.set(commentDocRef, newComment); // Set this change

      // Update selectedPost commentCount
      const postDocRef = doc(firestore, "discuss", post.id!);
      batch.update(postDocRef, {
        commentCount: increment(1),
      });

      await batch.commit(); // commit the changes!
      setCreateCommentLoading(false);

      setCommentText("");
      setComments([newComment, ...comments]);

      setPostState((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          commentCount: prev.selectedPost!.commentCount + 1,
        } as Post,
      }));
    } catch (error) {
      console.log("Creating comment", error);
    }
  };

  const onDeleteComment = async (comment: any) => {
    try {
      const batch = writeBatch(firestore);

      const deleteDocRef = doc(firestore, "comments", comment.id);
      batch.delete(deleteDocRef);

      // Update the commentCount
      const postDocRef = doc(firestore, "discuss", post.id!);
      batch.update(postDocRef, {
        commentCount: increment(-1),
      });

      await batch.commit();

      // Update state to reflect deletion
      setPostState((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          commentCount: prev.selectedPost!.commentCount - 1,
        } as Post,
      }));
      setComments(comments.filter((c) => c.id !== deleteDocRef.id));
      return true;
    } catch (error) {
      console.log("Deleting comment", error);
      return false;
    }
  };

  const getPostComments = async () => {
    try {
      setFetchCommentsLoading(true);
      const commentQuery = query(
        // Query comments collection
        collection(firestore, "comments"),
        orderBy("createdAt", "desc")
      );

      // Get docs => convert to Comment type
      const commentDocs = await getDocs(commentQuery);
      const newComments = commentDocs.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      // Update state
      setComments(newComments as Comment[]);
      setFetchCommentsLoading(false);
    } catch (error) {
      console.log("Fetching comments", error);
    }
  };

  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <Flex width="100%" direction="column" justify="center" align="center">
      {/* Create comment area */}
      <Flex
        mt={4}
        bg="white"
        width="100%"
        padding="10px"
        borderRadius="10px"
        direction="column"
      >
        <Textarea
          placeholder="Body (required)"
          _focus={{ borderColor: "brand.100" }}
          height="75px"
          bg="gray.100"
          onChange={(event) => setCommentText(event.target.value)}
          value={commentText}
        />
        <Button
          variant={commentText ? "log" : "disabled"}
          onClick={
            !user
              ? () => setAuthModalState({ open: true, view: "login" })
              : !commentText
              ? () => {}
              : onSubmitComment
          }
          left={2}
          top={1}
          alignSelf="flex-end"
          height="30px"
          borderRadius="10px"
          width="30%"
          isLoading={createCommentLoading}
        >
          Create
        </Button>
      </Flex>

      {/* Actual comment section area */}
      <Flex
        bg="white"
        borderRadius="10px"
        padding="10px"
        width="100%"
        align="center"
        mt={4}
        direction="column"
      >
        {comments.map((c) =>
          c.postID === post.id ? (
            <SingleComment key={c.id} comment={c} onDelete={onDeleteComment} />
          ) : (
            <></>
          )
        )}
      </Flex>
    </Flex>
  );
};
export default Comments;
