import { Button, Flex, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../../firebase/clientApp";

type SignOutProps = {
  user: any;
};

const SignOut: React.FC<SignOutProps> = ({ user }) => {
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      display={{ base: "none", sm: "flex" }}
    >
      <Flex display={{ base: "none", lg: "flex" }}>
        <Text m={2}>Hi, {user.displayName}</Text>
      </Flex>
      <Button onClick={() => signOut(auth)} height="35px">
        Sign Out
      </Button>
    </Flex>
  );
};
export default SignOut;
