import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Comment } from "./Comments";
import { FaReply, FaYoutubeSquare } from "react-icons/fa";
import moment from "moment";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
  BsFillReplyFill,
} from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

type SingleCommentProps = {
  comment: Comment;
  onDelete: (comment: Comment) => Promise<boolean>;
};

const SingleComment: React.FC<SingleCommentProps> = ({ comment, onDelete }) => {
  const [user] = useAuthState(auth);

  const deletable = !user
    ? false
    : user.uid === comment.creatorID
    ? true
    : false;

  const handleDelete = async () => {
    try {
      const deleted = await onDelete(comment);
      if (!deleted) {
        throw new Error("Error deleting comment");
      }
    } catch (error) {
      console.log("Handle delete comment", error);
    }
  };

  return (
    <Flex padding="10px" width="100%" borderRadius="10px">
      <Flex
        flex={1}
        padding="10px"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="10px"
        direction="column"
      >
        <Text fontSize="8pt">
          Posted {moment(new Date(comment.createdAt.seconds * 1000)).fromNow()}{" "}
        </Text>
        <Text mt={1} mb={2}>
          {comment.commentText}
        </Text>
        <Flex align="center">
          <Icon
            color="pink"
            as={BsFillArrowUpCircleFill}
            fontSize="15pt"
            mr={2}
          />
          <Icon
            color="blue.200"
            as={BsFillArrowDownCircleFill}
            fontSize="15pt"
            mr={2}
          />
          <Flex
            align="center"
            _hover={{ cursor: "pointer", fontWeight: "bold" }}
          >
            <Text fontSize="10pt" mr={2}>
              Reply
            </Text>
          </Flex>
          {deletable && (
            <Text
              onClick={handleDelete}
              _hover={{ cursor: "pointer", fontWeight: "bold" }}
              fontSize="10pt"
            >
              Delete
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default SingleComment;
