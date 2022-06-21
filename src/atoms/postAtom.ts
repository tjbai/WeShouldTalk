import { Timestamp } from "@google-cloud/firestore";
import { atom } from "recoil";

export type Post = {
  id?: string;
  creatorId: string;
  title: string;
  body: string;
  commentCount: number;
  voteCount: number;
  imageURL?: string;
  createdAt: Timestamp;
};

export type touchedPost = {
  id: string;
  postId: string;
  voteValue: number; // 1 or -1
};

interface PostState {
  selectedPost: Post | null;
  posts: Post[];
  touchedPosts: touchedPost[];
}

const defaultPostState: PostState = {
  selectedPost: null,
  posts: [],
  touchedPosts: [],
};

export const postState = atom<PostState>({
  key: "postState",
  default: defaultPostState,
});
