import { Box, Text } from "@chakra-ui/react";
import React from "react";
import About from "../../components/Discuss/About";
import NewPostForm from "../../components/Posts/PostForm";
import PageContent from "../../components/Layout/PageContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

type submitProps = {};

const submit: React.FC<submitProps> = () => {
  const [user] = useAuthState(auth);

  return (
    <PageContent>
      <></>
      <>
        <Box
          p="8px 0px"
          bg="none"
          borderBottom="2px solid"
          borderColor="brand.100"
        >
          <Text fontWeight="bold" fontSize="15pt">
            Create a post
          </Text>
        </Box>
        {user && <NewPostForm user={user} />}
      </>
      <></>
    </PageContent>
  );
};

export default submit;
