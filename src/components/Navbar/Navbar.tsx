import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import NavRight from "./NavRight/NavRight";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory";
import { HiSpeakerphone } from "react-icons/hi";
import { useRouter } from "next/router";

type NavbarProps = {};

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  return (
    <Flex
      bg="white"
      height="50px"
      align="center"
      width="100%"
      backgroundColor="brand.100"
      color="white"
      fontWeight="bold"
      padding="none"
      mr="20px"
    >
      <Flex
        align="center"
        height="35px"
        borderRadius="10px"
        padding="8px 10px"
        m="0px 5px"
        onClick={() => router.push("/discuss")}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Icon as={HiSpeakerphone} mr="5px" fontSize="18pt" />
        <Text display={{ base: "none", md: "unset" }}>
          I Think We Should Talk
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
