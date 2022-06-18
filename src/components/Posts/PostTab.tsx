import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {};

const TextInputs: React.FC<TextInputsProps> = () => {
  return (
    <Stack padding={4} spacing={3} width="100%">
      <Input
        placeholder="Title"
        _focus={{
          borderColor: "brand.100",
        }}
        fontWeight="bold"
      />
      <Textarea
        placeholder="Body (optional)"
        _focus={{
          borderColor: "brand.100",
        }}
        minHeight="300px"
      />
      <Flex justify="center">
        <Button width="40%" height="45px" variant="log">
          Post
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInputs;
