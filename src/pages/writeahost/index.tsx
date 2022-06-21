import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import DiscussHeader from "../../components/Discuss/DiscussHeader";
import PageContent from "../../components/Layout/PageContent";
import { SiLivejournal } from "react-icons/si";
import QuestionForm from "../../components/WriteAHost/QuestionForm";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const [createPostOverlaps] = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <DiscussHeader
        icon={SiLivejournal}
        title="WRITE A HOST"
        caption="Questions you want to ask and stories you have to share"
      />
      <PageContent>
        <></>
        <>
          <QuestionForm />
        </>
        <></>
      </PageContent>
    </>
  );
};
export default index;
