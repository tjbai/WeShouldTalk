import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import PostTab from "./PostTab";
import TabItem from "./TabItem";

type NewPostFormProps = {};

// Only going to support text and images for now
const formTabs = [
  {
    title: "Post",
    icon: IoDocumentText,
  },
  {
    title: "Images & Video",
    icon: IoImageOutline,
  },
];

// TabItem type for TabItem component
export type TabItem = {
  title: string;
  icon: typeof Icon.arguments;
};

const NewPostForm: React.FC<NewPostFormProps> = () => {
  // Selected tab
  const [whichTab, setWhichTab] = useState(formTabs[0].title);
  // Text input
  const [text, setText] = useState({
    title: "",
    body: "",
  });
  // Image input
  const [image, setImage] = useState<string>();

  // Send post information to firebase
  const handleSubmit = async () => {};

  // Handle image
  const onImageSelect = () => {};

  // Handle text change
  const onChange = () => {};

  return (
    <Flex direction="column" bg="white" mt={2} borderRadius="10px">
      <Flex width="100%">
        {formTabs.map((item) => (
          <TabItem
            item={item}
            selected={item.title === whichTab}
            setWhichTab={setWhichTab}
          />
        ))}
      </Flex>
      <Flex>{whichTab === "Post" ? <PostTab /> : <></>}</Flex>
    </Flex>
  );
};
export default NewPostForm;
