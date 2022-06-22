import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import About from "../../components/Discuss/About";
import CreatePost from "../../components/Discuss/CreatePost";
import DiscussHeader from "../../components/Discuss/DiscussHeader";
import PageContent from "../../components/Layout/PageContent";
import AllPosts from "../../components/Discuss/AllPosts";
import { BsPeopleFill } from "react-icons/bs";

type DiscussPageProps = {};

const index: React.FC = ({}) => {
  const [createPostOverlaps] = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <DiscussHeader
        icon={BsPeopleFill}
        title="DISCUSS"
        caption="A place for insightful comments and healthy discourse"
      />
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
