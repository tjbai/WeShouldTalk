import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {
  text: {
    title: string;
    body: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: () => void;
  loading: boolean;
};

const TextInputs: React.FC<TextInputsProps> = ({
  text,
  onChange,
  handleSubmit,
  loading,
}) => {
  return (
    <Stack padding={4} spacing={3} width="100%">
      <Input
        value={text.title}
        onChange={onChange}
        placeholder="Title"
        _focus={{
          borderColor: "brand.100",
        }}
        fontWeight="bold"
      />
      <Textarea
        value={text.body}
        onChange={onChange}
        placeholder="Body (optional)"
        _focus={{
          borderColor: "brand.100",
        }}
        minHeight="300px"
      />
      <Flex justify="center">
        <Button
          width="40%"
          height="45px"
          variant={!text.title ? "disabled" : "log"}
          // onClick={!text.title ? () => {} : handleSubmit}
          onClick={handleSubmit}
          isLoading={loading}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInputs;
