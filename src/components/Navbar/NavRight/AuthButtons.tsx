import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant="log"
        height="35px"
        display={{ base: "none", sm: "flex" }}
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log in
      </Button>

      <Button
        height="35px"
        display={{ base: "none", sm: "flex" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign up
      </Button>
    </>
  );
};
export default AuthButtons;
