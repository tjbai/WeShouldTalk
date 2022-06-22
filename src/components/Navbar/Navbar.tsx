import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiSpeakerphone } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { pageState } from "../../atoms/pageAtom";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory";
import NavRight from "./NavRight/NavRight";
import SearchInput from "./SearchInput";

type NavbarProps = {};

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const { asPath } = useRouter();
  const router = useRouter();
  // const [pageStateVal, setPageStateVal] = useRecoilState(pageState);

  const isntHome = asPath !== "/";

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
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
        <Icon as={HiSpeakerphone} mr="5px" fontSize="18pt" />
        <Text display={{ base: "none", md: "unset" }}>
          I Think We Should Talk
        </Text>
      </Flex>
      {isntHome && <Directory />}
      {isntHome && <SearchInput user={user} />}
      <Flex flexGrow={1} justify="flex-end">
        <NavRight user={user} />
      </Flex>
    </Flex>
  );
};
export default Navbar;
