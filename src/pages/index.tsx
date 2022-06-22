import { Button, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Page, pageState } from "../atoms/pageAtom";

const Home: NextPage = () => {
  const router = useRouter();
  const [pageStateVal, setPageStateVal] = useRecoilState(pageState);

  const handleRoute = (destination: string) => {
    const newPage: Page = {
      name: destination,
    };
    setPageStateVal({ currentPage: newPage });

    router.push(`/${destination.replace(/\s/g, "").toLowerCase()}`);
  };

  return (
    <Flex
      align="center"
      justify="center"
      overflow="hidden"
      flex={1}
      height="100vh"
      direction="column"
      bg="brand.100"
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        color="white"
        borderRadius="25px"
        padding="15px"
      >
        <Text
          justifySelf="center"
          fontWeight="bold"
          fontSize={{ md: "5vw", base: "7vw" }}
          overflow="wrap"
        >
          I THINK WE SHOULD TALK
        </Text>
        <Text
          fontWeight="bold"
          fontSize="1.5vw"
          display={{ base: "none", md: "flex" }}
        >
          A podcast about college, mental health, and cutting the stigma
        </Text>
      </Flex>
      <Flex
        mt={5}
        width="100%"
        justify="center"
        align="center"
        // direction={{ base: "column", md: "row" }}
      >
        <Button
          fontSize={{ base: "10pt", md: "12pt" }}
          variant="log"
          width={{ md: "15%", base: "100px" }}
          onClick={() => handleRoute("Discuss")}
          m="0px 10px"
        >
          Discuss
        </Button>
        <Button
          fontSize={{ base: "10pt", md: "12pt" }}
          _hover={{ bg: "gray.300" }}
          width={{ md: "15%", base: "100px" }}
          onClick={() => handleRoute("Write a Host")}
          m="0px 10px"
        >
          Write a Host
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
