import React from "react";
import { Post } from "../../atoms/postAtom";
import { HiSpeakerphone } from "react-icons/hi";
import { GiHeartPlus, GiHeartMinus } from "react-icons/gi";
import { Box, Flex, Icon, Stack, Text, Image, Button } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import { BiRotateLeft } from "react-icons/bi";
import moment from "moment";

type SinglePostProps = {
  post: Post;
  madeByUser: boolean;
  touchedByUser: number;
  onVote: () => {};
  onRemove: () => {};
  onSelect: () => void;
};

const SinglePost: React.FC<SinglePostProps> = ({
  post,
  madeByUser,
  touchedByUser,
  onVote,
  onRemove,
  onSelect,
}) => {
  return (
    <Flex
      width="100%"
      transition="0.3s"
      _hover={{
        cursor: "pointer",
      }}
      direction="row"
    >
      {/* post content */}
      <Flex
        width="100%"
        bg="white"
        borderLeftRadius="10px"
        flex={1}
        border="1px solid white"
        _hover={{
          borderColor: "brand.100",
        }}
        direction="column"
      >
        {/* inner content */}
        <Flex flex={1} padding="10px" direction="column">
          <Text fontWeight="bold">{post.title}</Text>
          <Text pt={1} fontSize="10pt">
            {post.body}
          </Text>
          {post.imageURL && (
            <Flex
              pt={1}
              justify="center"
              maxHeight="400px"
              width="auto"
              height="auto"
            >
              <Image
                objectFit="cover"
                borderRadius="10px"
                src={post.imageURL}
              />
            </Flex>
          )}
        </Flex>

        {/* time and comment bar */}
        <Flex
          justify="space-between"
          height="35px"
          direction="row"
          align="center"
          fontSize="10pt"
          borderTop="1px solid gray"
        >
          <Text ml="10px">
            Posted {moment(new Date(post.createdAt.seconds * 1000)).fromNow()}
          </Text>
          <Flex
            height="100%"
            padding="10px"
            direction="row"
            align="center"
            justify="flex-start"
            _hover={{
              bg: "gray.200",
            }}
            fontSize="12pt"
            borderTopLeftRadius="10px"
          >
            <Icon as={HiSpeakerphone} mr="5px" />
            <Text>{post.commentCount}</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* like/dislike bar */}
      <Flex width="20px" height="100%" direction="column">
        {/* {touchedByUser >= 0 && (
          <Flex
            height="42.5px"
            borderRightRadius="10px"
            bg={touchedByUser === 1 ? "brand.100" : "brand.50"}
            _hover={{ bg: "brand.100" }}
            justify="center"
            align="flex-start"
            padding="5px"
            onClick={onVote}
          >
            <Icon color="white" fontSize="10pt" as={GiHeartPlus} />
          </Flex>
        )} */}
        {/* {touchedByUser <= 0 && (
          <Flex
            height="42.5px"
            borderRightRadius="10px"
            bg={touchedByUser === -1 ? "blue.400" : "blue.300"}
            _hover={{ bg: "blue.400" }}
            justify="center"
            align="flex-end"
            padding="5px"
            onClick={onVote}
          >
            <Icon color="white" fontSize="10pt" as={GiHeartMinus} />
          </Flex>
        )} */}
      </Flex>
    </Flex>
  );
};
export default SinglePost;
