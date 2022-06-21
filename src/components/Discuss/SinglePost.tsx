import React, { useState } from "react";
import { Post } from "../../atoms/postAtom";
import { HiSpeakerphone } from "react-icons/hi";
import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  Image,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import moment from "moment";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import { userInfo } from "os";

type SinglePostProps = {
  post: Post;
  madeByUser: boolean;
  touchedByUser: number;
  onVote: (post: Post, vote: number) => {};
  onRemove: (post: Post) => Promise<boolean>;
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
  const [imageLoading, setImageLoading] = useState(true);
  const handleDelete = async () => {
    try {
      const deleted = await onRemove(post);
      if (!deleted) {
        throw new Error("Error deleting post");
      }
    } catch (error) {
      console.log("Handle delete", error);
    }
  };

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
              {imageLoading && (
                <Skeleton
                  height="200px"
                  width="100%"
                  borderRadius="10px"
                  mt={4}
                />
              )}
              <Image
                objectFit="cover"
                borderRadius="10px"
                src={post.imageURL}
                onLoad={() => setImageLoading(false)}
              />
            </Flex>
          )}
        </Flex>

        {/* user utilities */}
        <Flex
          justify="space-between"
          height="35px"
          direction="row"
          align="center"
          fontSize="10pt"
          borderTop="1px solid"
          borderColor="gray.200"
        >
          <Flex
            height="100%"
            direction="row"
            align="center"
            justify="flex-start"
            fontSize="12pt"
          >
            {/* comment button */}
            <Flex
              height="100%"
              _hover={{
                bg: "gray.200",
              }}
              justify="center"
              align="center"
              padding="10px"
              borderTopRightRadius="10px"
              borderBottomLeftRadius="10px"
            >
              <Icon as={HiSpeakerphone} mr="5px" />
              <Text fontSize="10pt">{post.commentCount}</Text>
            </Flex>

            {/* delete button */}
            {madeByUser && (
              <Flex
                height="100%"
                _hover={{
                  bg: "gray.200",
                }}
                justify="center"
                align="center"
                padding="10px"
                borderTopRightRadius="10px"
                borderBottomLeftRadius="10px"
                onClick={handleDelete}
              >
                <Icon as={AiFillDelete} fontSize="13pt" mr="5px" mb={0.5} />
                <Text fontSize="10pt">Delete</Text>
              </Flex>
            )}
          </Flex>

          {/* display time */}
          <Text mr="10px">
            Posted {moment(new Date(post.createdAt.seconds * 1000)).fromNow()}
          </Text>
        </Flex>
      </Flex>

      {/* like/dislike bar */}
      <Flex width="20px" height="100%" direction="column">
        <Flex
          height={
            touchedByUser == 1 ? "60px" : touchedByUser == 0 ? "42.5px" : "25px"
          }
          borderRightRadius="10px"
          bg={touchedByUser === 1 ? "#B25068" : "#d98fa1"}
          _hover={{ bg: "#B25068" }}
          justify="center"
          align="flex-start"
          padding="5px"
          onClick={() => onVote(post, 1)}
        >
          <Icon as={FaHeart} color="white" fontSize="10pt" />
        </Flex>
        <Flex
          height={
            touchedByUser == -1
              ? "60px"
              : touchedByUser == 0
              ? "42.5px"
              : "25px"
          }
          borderRightRadius="10px"
          bg={touchedByUser == -1 ? "blue.400" : "blue.300"}
          _hover={{ bg: "blue.400" }}
          justify="center"
          align="flex-end"
          padding="5px"
          onClick={() => onVote(post, -1)}
        >
          <Icon as={FaHeartBroken} color="white" fontSize="10pt" />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default SinglePost;
