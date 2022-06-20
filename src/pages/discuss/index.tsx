import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Community } from "../../atoms/communityAtom";
import About from "../../components/Discuss/About";
import CreatePost from "../../components/Discuss/CreatePost";
import DiscussHeader from "../../components/Discuss/DiscussHeader";
import PageContent from "../../components/Layout/PageContent";
import { firestore } from "../../firebase/clientApp";
import AllPosts from "../../components/Discuss/AllPosts";

type DiscussPageProps = {
  communityData: Community;
};

const index: React.FC = ({}) => {
  const [createPostOverlaps] = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <DiscussHeader />
      <PageContent>
        <></>
        <>
          <CreatePost query={createPostOverlaps} />
          <AllPosts />
        </>
        <>{createPostOverlaps ? <About /> : <></>}</>
      </PageContent>
    </>
  );
};

export default index;
