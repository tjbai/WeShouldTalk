import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";
import { auth } from "../../firebase/clientApp";
import { ImPencil2 } from "react-icons/im";

type CreatePostProps = {
  query: any;
};

const CreatePost: React.FC<CreatePostProps> = (query) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const SetAuthModalState = useSetRecoilState(authModalState);

  const onClick = () => {
    // Make sure user is logged-in first
    if (!user) {
      SetAuthModalState({ open: true, view: "login" });
      return;
    }
    router.push("/discuss/submit");
  };
  return (
    <Flex
      justify="space-evenly"
      align="center"
      bg="white"
      height="56px"
      borderRadius="10px"
      border="1px solid"
      borderColor="gray.300"
      p={2}
      mb={4}
      grow={1}
      maxWidth={{ createPostOverlaps: "540px", base: "none" }}
    >
      <Icon as={ImPencil2} fontSize="20pt" mr={2} mb={1} color="gray.400" />
      <Input
        placeholder="Add to the conversation"
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "brand.100",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        borderColor="gray.200"
        height="36px"
        borderRadius={4}
        onClick={onClick}
      />
    </Flex>
  );
};
export default CreatePost;
