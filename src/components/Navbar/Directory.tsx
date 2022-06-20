import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";
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
        mr="5px"
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
      <MenuList padding="0px 0px" bg="brand.200"></MenuList>
    </Menu>
  );
};
export default Directory;
