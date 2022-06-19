import { Timestamp } from "@google-cloud/firestore";
import { atom } from "recoil";

export type Post = {
  //   id: string;
  creatorId: string;
  title: string;
  body: string;
  commentCount: number;
  voteCount: number;
  imageURL?: string;
  createdAt: Timestamp;
};

interface PostState {
  selectedPost: Post | null;
  posts: Post[];
}

const defaultPostState: PostState = {
  selectedPost: null,
  posts: [],
};

export const postState = atom<PostState>({
  key: "postState",
  default: defaultPostState,
});
