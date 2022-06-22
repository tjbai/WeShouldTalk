import { Button, Flex, Icon } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Post, postState } from "../../atoms/postAtom";
import About from "../../components/Discuss/About";
import SinglePost from "../../components/Discuss/SinglePost";
import PageContent from "../../components/Layout/PageContent";
import { auth, firestore } from "../../firebase/clientApp";
import usePosts from "../../hooks/usePosts";
import { IoCaretBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import Comments from "../../components/Discuss/Comments/Comments";

const SinglePostPage: React.FC = () => {
  const { postStateVal, setPostStateVal, onVote, onRemove } = usePosts();
  const [user] = useAuthState(auth);
  const router = useRouter();

  const fetch = async (pid: string) => {
    try {
      const postRef = doc(firestore, "discuss", pid);
      const postDoc = await getDoc(postRef);
      setPostStateVal((prev) => ({
        ...prev,
        selectedPost: { id: postDoc.id, ...postDoc.data() } as Post,
      }));
    } catch (error) {
      console.log("Fetching post directly", error);
    }
  };

  // If user directly accesses link, render the relevant post
  useEffect(() => {
    const { pid } = router.query;

    if (pid && !postStateVal.selectedPost) {
      fetch(pid as string);
    }
  }, [router.query, postStateVal]);

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

  return (
    <PageContent>
      <></>
      <>
        {postStateVal.selectedPost && (
          <Flex padding="0px" direction="column" align="center">
            <Button
              left={-2}
              variant="log"
              height="30px"
              borderRadius="10px"
              borderWidth="0px"
              m={2}
              width="100px"
              onClick={() => router.push("/discuss")}
              alignSelf="flex-start"
            >
              <Icon as={IoCaretBackOutline} />
              Go back
            </Button>
            <SinglePost
              post={postStateVal.selectedPost}
              onVote={onVote}
              onRemove={onRemove}
              touchedByUser={touchValue(postStateVal.selectedPost)}
              madeByUser={user?.uid === postStateVal.selectedPost?.creatorId}
            />
            <Comments post={postStateVal.selectedPost} />
          </Flex>
        )}
      </>
      <></>
    </PageContent>
  );
};
export default SinglePostPage;
