import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex align="center" justify="center">
      <Flex width="100%" align="center" justify="center">
        <Flex
          display={{ base: "none", md: "flex" }}
          align="flex-start"
          justify="flex-end"
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        <Flex direction="column" width="95%" maxWidth="860px">
          {children && children[1 as keyof typeof children]}
        </Flex>
        <Flex justify="flex-end" mr="15px">
          {children && children[2 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
