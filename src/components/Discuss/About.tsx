import { Box, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <Flex
      width="250px"
      height="400px"
      position="absolute"
      bgColor="gray.100"
      borderRadius="10px"
      top="220px"
      direction="column"
    >
      <Flex
        flex={1}
        bgColor="brand.100"
        borderTopRadius="10px"
        width="100%"
        justify="center"
        align="center"
        color="white"
        fontWeight="bold"
        fontSize="11pt"
        transition="0.2s"
        _hover={{
          color: "white",
          bg: "brand.200",
          cursor: "pointer",
        }}
      >
        <Text mr="5px">About </Text>
        <em> I Think We Should Talk</em>
      </Flex>
      <Flex flex={9} justify="center" align="center">
        <Flex
          height="100%"
          width="100%"
          bg="white"
          borderRadius="10px"
          padding="10px 16px"
        >
          <Text color="brand.200" fontSize="11pt">
            A podcast about ...
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default About;
