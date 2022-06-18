import { useMediaQuery } from "@chakra-ui/react";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { Community } from "../../atoms/communityAtom";
import About from "../../components/Discuss/About";
import CreatePost from "../../components/Discuss/CreatePost";
import DiscussHeader from "../../components/Discuss/DiscussHeader";
import PageContent from "../../components/Layout/PageContent";
import { firestore } from "../../firebase/clientApp";
import { Text } from "@chakra-ui/react";

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
        </>
        <>{createPostOverlaps ? <About /> : <></>}</>
      </PageContent>
    </>
  );
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   try {
//     const communityDocRef = doc(
//       firestore,
//       "communities",
//       context.query.communityId as string
//     );
//     const communityDoc = await getDoc(communityDocRef);

//     return {
//       props: {
//         communityData: communityDoc.data(),
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

export default index;
