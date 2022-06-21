import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Textarea,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";

type QuestionFormProps = {};

const QuestionForm: React.FC<QuestionFormProps> = () => {
  return (
    <Flex bg="gray.100" borderRadius="10px" maxWidth="600px" direction="column">
      {/* <Flex borderTopRadius="10px" height="20px" width="100%" bg="brand.100" /> */}

      <Stack
        direction="column"
        flex={1}
        padding="10px"
        justify="center"
        align="center"
        spacing={3}
      >
        <RadioGroup width="100%">
          <Flex direction="row" width="100%" justify="flex-start">
            <Radio
              value="1"
              bgColor="brand.25"
              borderColor="gray.100"
              colorScheme="red"
              mr={8}
            >
              Don't <em>share</em>
            </Radio>
            <Radio
              value="2"
              bgColor="brand.25"
              borderColor="gray.100"
              colorScheme="red"
              mr={8}
            >
              Don't <em>care</em>
            </Radio>
            <Radio
              value="3"
              bgColor="brand.25"
              borderColor="gray.100"
              colorScheme="red"
            >
              Do share
            </Radio>
          </Flex>
        </RadioGroup>
        <Input
          bg="gray.200"
          fontWeight="bold"
          placeholder="Title"
          _focus={{
            borderColor: "brand.100",
          }}
        />

        <Textarea
          bg="gray.200"
          height="500px"
          placeholder="Speak your mind!"
          _focus={{
            borderColor: "brand.100",
          }}
        />
        <Button width="50%" variant="log">
          Submit
        </Button>
      </Stack>
    </Flex>
  );
};
export default QuestionForm;
