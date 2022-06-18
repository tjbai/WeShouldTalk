import { Box, Text } from "@chakra-ui/react";
import React from "react";
import About from "../../components/Discuss/About";
import NewPostForm from "../../components/Posts/PostForm";
import PageContent from "../../components/Layout/PageContent";

type submitProps = {};

const submit: React.FC<submitProps> = () => {
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
        <NewPostForm />
      </>
      <></>
    </PageContent>
  );
};

export default submit;
