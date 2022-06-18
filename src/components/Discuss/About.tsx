import { Flex } from "@chakra-ui/react";
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
    >
      <Flex
        height="10%"
        bgColor="brand.50"
        borderTopRadius="10px"
        width="100%"
        justify="center"
        align="center"
        color="black"
        fontWeight="bold"
        fontSize="11pt"
        transition="0.2s"
        _hover={{
          color: "white",
          bg: "brand.100",
          cursor: "pointer",
        }}
      >
        About (This Forum)
      </Flex>
    </Flex>
  );
};
export default About;
