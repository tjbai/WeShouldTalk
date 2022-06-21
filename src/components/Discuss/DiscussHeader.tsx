import { Box, Circle, Flex, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";

type DiscussHeaderProps = {
  icon: any;
  title: string;
  caption: string;
};

const DiscussHeader: React.FC<DiscussHeaderProps> = ({
  icon,
  title,
  caption,
}) => {
  const [minLabelWidth] = useMediaQuery("(min-width: 650px)");

  return (
    <Flex bg="brand.50" direction="column" width="100%" height="150px">
      <Box bg="white" height="50%" padding="30px"></Box>
      <Flex justify="center" bg="brand.50" flexGrow={1}>
        <Flex width="95%" maxWidth="860px">
          <Circle
            position="relative"
            top={-5}
            border="4px solid"
            borderColor="brand.100"
            size="80px"
            bg="white"
          >
            <Icon color="brand.100" as={icon} fontSize={50} />
          </Circle>
          <Flex direction="column">
            <Text
              position="relative"
              top={-3}
              color="brand.200"
              fontSize="40px"
              fontWeight="bold"
              margin="0px 5px"
              marginTop="5px"
            >
              {title}
            </Text>
            {minLabelWidth && (
              <Text
                fontWeight="bold"
                color="brand.200"
                position="relative"
                top={-5}
                left={1}
              >
                {caption}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DiscussHeader;
