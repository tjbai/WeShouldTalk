import { Flex, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";

type HostButtonProps = {
  name: string;
  instagramHandle: string;
};

const HostButton: React.FC<HostButtonProps> = ({ name, instagramHandle }) => {
  console.log(name);
  return (
    <Flex
      width="90%"
      height="35%"
      borderRadius="10px"
      padding="5px 10px"
      bg="gray.100"
      color="brand.200"
      _hover={{
        cursor: "pointer",
        bg: "gray.200",
      }}
    >
      <Flex flex={1} direction="row">
        <Flex flex={2} direction="column">
          <Text fontWeight="bold" fontSize="11pt">
            {name}
          </Text>
          <Text fontSize="9pt">Johns Hopkins '23</Text>
          <Flex direction="row" align="center">
            <Icon as={AiFillInstagram} mr={0.5} />
            <Text fontSize="9pt">@{instagramHandle}</Text>
          </Flex>
        </Flex>
        <Flex flex={1} justify="center" align="center">
          <Icon as={IoPersonCircle} fontSize="40pt" />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default HostButton;
