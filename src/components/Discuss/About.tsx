import { Box, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import HostButton from "./HostButton";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <Flex
      width="260px"
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
          direction="column"
        >
          <Text color="brand.200" fontSize="11pt">
            A podcast about college life and mental health, born out of{" "}
            <a href="https://www.jhu.edu">
              <Text as="b">Johns Hopkins University.</Text>
            </a>{" "}
            Made by students, meant for students.
          </Text>
          <Text
            borderBottom="2px solid"
            borderColor="brand.200"
            color="brand.200"
            mt={2}
            pb={1}
            fontWeight="bold"
            fontSize="12pt"
            align="center"
            width="80%"
            alignSelf="center"
          >
            Hosts
          </Text>
          <Flex
            flex={1}
            direction="column"
            align="center"
            justify="space-evenly"
          >
            <HostButton name="Jeniffer Min" instagramHandle="jjeniffermin" />
            <HostButton name="Isabella Evansen" instagramHandle="izzyyy__eee" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default About;
