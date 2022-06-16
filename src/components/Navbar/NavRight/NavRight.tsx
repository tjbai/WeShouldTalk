import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import AuthModal from "../../Modals/AuthModal";
import AuthButtons from "./AuthButtons";
import SignOut from "./SignOut";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <SignOut user={user} /> : <AuthButtons />}
      </Flex>
    </>
  );
};
export default RightContent;
