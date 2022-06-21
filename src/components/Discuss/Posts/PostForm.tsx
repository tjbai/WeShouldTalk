import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { Post } from "../../../atoms/postAtom";
import { firestore, storage } from "../../../firebase/clientApp";
import ImageUpload from "./ImageUpload";
import PostTab from "./PostTab";
import TabItem from "./TabItem";

type NewPostFormProps = {
  user: User;
};

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

// type for TabItem component
export type TabItem = {
  title: string;
  icon: typeof Icon.arguments;
};

const NewPostForm: React.FC<NewPostFormProps> = ({ user }) => {
  const [whichTab, setWhichTab] = useState(formTabs[0].title);
  const [text, setText] = useState({
    title: "",
    body: "",
  });
  const [image, setImage] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  // Send post information to firebase
  const handleSubmit = async () => {
    // Create post object
    const post: Post = {
      creatorId: user?.uid,
      title: text.title,
      body: text.body,
      commentCount: 0,
      voteCount: 0,
      createdAt: serverTimestamp() as Timestamp,
    };

    setLoading(true);
    // Store post in firebase firestore "discuss" collection
    try {
      const docRef = await addDoc(collection(firestore, "discuss"), post);
      await updateDoc(docRef, {
        id: docRef.id,
      });
      // console.log("GETS HERE", docRef.id);

      // If there is an image, store the image in firebase storage.
      if (image) {
        const imgRef = ref(storage, `posts/${docRef.id}/image`);
        await uploadString(imgRef, image, "data_url");
        const downloadURL = await getDownloadURL(imgRef);

        // Update post object
        await updateDoc(docRef, {
          imageURL: downloadURL,
        });
      }
    } catch (error) {
      console.log("Create post error", error);
      setError(true);
    }
    setLoading(false);

    // Take user back to discuss home page
    router.back();
  };

  // Handle image
  const onImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const read = new FileReader();
    if (event.target.files?.[0]) {
      read.readAsDataURL(event.target.files[0]);
    }

    read.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setImage(readerEvent.target.result as string);
      }
    };
  };

  // Manage state of user text input
  const onTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const node = event.target.nodeName;
    if (node === "INPUT") {
      setText((prev) => ({
        ...prev,
        title: event.target.value,
      }));
    } else {
      setText((prev) => ({
        ...prev,
        body: event.target.value,
      }));
    }
  };

  return (
    <Flex direction="column" bg="white" mt={2} borderRadius="10px">
      <Flex width="100%">
        {formTabs.map((item) => (
          <TabItem
            key={item.title}
            item={item}
            selected={item.title === whichTab}
            setWhichTab={setWhichTab}
          />
        ))}
      </Flex>
      <Flex>
        {whichTab === "Post" && (
          <PostTab
            text={text}
            handleSubmit={handleSubmit}
            onChange={onTextChange}
            loading={loading}
          />
        )}
        {whichTab === "Images & Video" && (
          <ImageUpload
            onImageSelect={onImageSelect}
            image={image}
            setWhichTab={setWhichTab}
            setImage={setImage}
          />
        )}
      </Flex>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <Text>Error creating post</Text>
        </Alert>
      )}
    </Flex>
  );
};
export default NewPostForm;
