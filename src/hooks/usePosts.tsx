import React from "react";
import { useRecoilState } from "recoil";
import { postState } from "../atoms/postAtom";

type usePostsProps = {};

const usePosts = () => {
  const [postStateVal, setPostStateVal] = useRecoilState(postState);

  const onVote = async () => {};

  const onSelect = () => {};

  const onRemove = async () => {};

  return {
    postStateVal,
    setPostStateVal,
    onVote,
    onSelect,
    onRemove,
  };
};
export default usePosts;
