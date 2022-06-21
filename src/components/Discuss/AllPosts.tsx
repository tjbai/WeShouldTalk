import React, { useEffect, useState } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../../firebase/clientApp";
import usePosts from "../../hooks/usePosts";
import { Post } from "../../atoms/postAtom";
import SinglePost from "./SinglePost";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPost from "./LoadingPost";
import { IoConstructOutline } from "react-icons/io5";

type PostProps = {};

const AllPosts: React.FC<PostProps> = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const { postStateVal, setPostStateVal, onVote, onSelect, onRemove } =
    usePosts();

  // Grab all posts from firebase firestore
  const getPosts = async () => {
    try {
      setLoading(true);
      const postQuery = query(
        collection(firestore, "discuss"),
        orderBy("createdAt", "desc")
      );

      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((d) => ({ id: d.id, ...d.data() }));

      // Have to do some weird typecasting here
      setPostStateVal((prev) => ({
        ...prev,
        posts: posts as unknown as Post[],
      }));
      setLoading(false);
    } catch (error) {
      console.log("Getting posts", error);
    }
  };

  const touchValue = (post: Post) => {
    let voteValue = 0;
    let val = postStateVal.touchedPosts.find(
      (item) => item.postId === post.id
    )?.voteValue;

    if (typeof val === "undefined") {
      return 0;
    } else {
      return val;
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPost />
      ) : (
        <Stack
          spacing="20px"
          borderRadius="10px"
          maxWidth={{ createPostOverlaps: "560px", base: "none" }}
          direction="column"
        >
          {postStateVal.posts.map((p) => (
            <SinglePost
              key={p.title}
              post={p}
              madeByUser={user?.uid === p.creatorId}
              touchedByUser={touchValue(p)}
              onVote={onVote}
              onSelect={onSelect}
              onRemove={onRemove}
            />
          ))}
        </Stack>
      )}
    </>
  );
};
export default AllPosts;
