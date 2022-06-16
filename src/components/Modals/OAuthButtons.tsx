import { Flex, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex
      direction="column"
      width="100%"
      mb={2}
      align="center"
      justify="center"
    >
      <Button isLoading={loading} onClick={() => signInWithGoogle()}>
        <Image src="/images/googlelogo.png" width="20px" margin={2}></Image>
        Continue with Google
      </Button>
      {error && (
        <Text color="red" fontSize="8pt">
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
