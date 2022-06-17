import React from "react";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BiStats } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";

type UserStatsProps = {
  user: any;
};

const UserStats: React.FC<UserStatsProps> = ({ user }) => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        borderRadius="15px"
        _hover={{ bg: "#E2E8F0" }}
        padding="2px 8px"
        height="35px"
        backgroundColor="white"
        color="brand.100"
      >
        <Flex margin="5px" alignItems="center" justify="space-between">
          <Icon as={BiStats} fontSize={25} />
        </Flex>
      </MenuButton>
      <MenuList padding="0px" bg="brand.100"></MenuList>
    </Menu>
  );
};

export default UserStats;
