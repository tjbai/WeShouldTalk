import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { TabItem } from "./PostForm";

type TabProps = {
  item: TabItem;
  selected: boolean;
  setWhichTab: (value: string) => void;
};

const Tab: React.FC<TabProps> = ({ item, selected, setWhichTab }) => {
  return (
    <Flex
      justify="flex-start"
      align="center"
      flexGrow={1}
      p="12px 0px"
      cursor="pointer"
      transition="0.3s"
      borderRadius={
        item.title === "Post" ? "10px 0px 0px 0px" : "0px 10px 0px 0px"
      }
      _hover={{
        bg: "brand.100",
        color: "white",
      }}
      color={selected ? "white" : "black"}
      bg={selected ? "brand.100" : "brand.50"}
      onClick={() => setWhichTab(item.title)}
    >
      <Flex align="center" height="18px" margin="0px 10px">
        <Icon as={item.icon}></Icon>
      </Flex>
      <Text fontWeight="bold" fontSize="15pt">
        {item.title}
      </Text>
    </Flex>
  );
};
export default Tab;
