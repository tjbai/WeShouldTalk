import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { Community } from "../../atoms/communityAtom";
import CreatePost from "../../components/Discuss/CreatePost";
import DiscussHeader from "../../components/Discuss/DiscussHeader";
import PageContent from "../../components/Layout/PageContent";
import { firestore } from "../../firebase/clientApp";

type DiscussPageProps = {
  communityData: Community;
};

const index: React.FC = ({}) => {
  return (
    <>
      <DiscussHeader />
      <PageContent>
        <>
          <div></div>
        </>
        <>
          <CreatePost />
        </>
        <>
          <div></div>
        </>
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
