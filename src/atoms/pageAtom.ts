import { atom } from "recoil";
import { BsPeopleFill, BsPencilFill } from "react-icons/bs";

// Can expand on this type later if we want
export type Page = {
  name: any;
};

interface PageState {
  currentPage: Page;
}

const DefaultPageState: PageState = {
  currentPage: {
    name: "",
  },
};

export const pageState = atom<PageState>({
  key: "pageState",
  default: DefaultPageState,
});
