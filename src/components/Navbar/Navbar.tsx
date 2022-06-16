import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import NavRight from "./NavRight/NavRight";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory/Directory";

type NavbarProps = {};

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      bg="white"
      height="50px"
      align="center"
      backgroundColor="brand.100"
      color="white"
      fontWeight="bold"
      padding="none"
    >
      <Flex align="center">
        <Text margin="20px">(LOGO)</Text>
        <Text mr="20px" display={{ base: "none", md: "unset" }}>
          (TITLE OF FORUM)
        </Text>
      </Flex>
      <Directory />
      <SearchInput user={user} />
      <Flex flexGrow={1} justify="flex-end">
        <NavRight user={user} />
      </Flex>
    </Flex>
  );
};
export default Navbar;
