import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {
  user: any;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (
    <Flex grow={1} maxWidth={user ? "auto" : "600px"} mr={2} align="center">
      <InputGroup color="black">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search"
          fontSize="10pt"
          _placeholder={{ color: "gray.400" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "brand.200",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "brand.200",
          }}
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
