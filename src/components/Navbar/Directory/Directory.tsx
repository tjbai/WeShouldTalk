import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { BsPeopleFill, BsPencilFill } from "react-icons/bs";

const Directory: React.FC = () => {
  const setModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        borderRadius="10px"
        _hover={{ bg: "brand.200" }}
        padding="2px 12px"
        height="35px"
        mr="20px"
      >
        <Flex alignItems="center" justify="space-between">
          <Flex alignItems="center">
            <Icon as={BsPeopleFill} fontSize={20} />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text margin={2} fontWeight="bold">
                Discuss
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList
        padding="2px 12px"
        paddingTop="4px"
        height="35px"
        borderRadius="10px"
        bg="brand.100"
        color="black"
      >
        {/* <Text>Ask</Text> */}
        <Flex color="white" align="center">
          <Icon as={BsPencilFill} />
          <Text ml={2}>Ask a Host</Text>
        </Flex>
      </MenuList>
    </Menu>
  );
};
export default Directory;
