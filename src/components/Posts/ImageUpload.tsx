import { Button, Flex, Text, Image } from "@chakra-ui/react";
import { ViewportEventHandler } from "framer-motion/types/motion/features/viewport/types";
import React, { useRef } from "react";

type ImageUploadProps = {
  onImageSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  image?: string;
  setWhichTab: (value: string) => void;
  setImage: (value: string) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  image,
  setWhichTab,
  setImage,
}) => {
  const uploadFileRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      justify="center"
      align="center"
      width="100%"
      bg="white"
      borderBottomRadius="10px"
    >
      {image ? (
        <Flex direction="column" justify="center" align="center" margin={10}>
          <Image
            src={image}
            maxWidth="400px"
            maxHeight="400px"
            border="2px dashed"
            borderColor="brand.100"
            padding={5}
          />
          <Flex mt={10} direction="row" justify="center" align="center">
            <Button
              margin="0px 20px"
              width="150px"
              onClick={() => setImage("")}
            >
              Clear Image
            </Button>
            <Button
              margin="0px 20px"
              width="150px"
              variant="log"
              onClick={() => setWhichTab("Post")}
            >
              Continue
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex
          p={20}
          border="2px dashed"
          borderColor="brand.50"
          borderRadius="10px"
          margin={5}
          justify="center"
          align="center"
          width="100%"
        >
          <Button
            variant="log"
            width="150px"
            onClick={() => uploadFileRef.current?.click()}
          >
            Upload
          </Button>
          <input
            ref={uploadFileRef}
            type="file"
            onChange={onImageSelect}
            hidden
          />
          <img src={image} />
        </Flex>
      )}
    </Flex>
  );
};
export default ImageUpload;
