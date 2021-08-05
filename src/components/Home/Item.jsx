// libraries
import React from "react";

// components
import { Box, Flex, Text, Divider } from "native-base";

// assets
import {
  accentLight,
  grayColor,
  greenColor,
  secondayLight,
  textColor,
  textDark,
} from "../../assets/colors";

// icons
import { MaterialIcons } from "@expo/vector-icons";
import { windowHeight, windowWidth } from "../../utils/dimensions";

const Item = ({ data }) => {
  const getFirstChar = () => {
    return data.name.charAt(0);
  };

  return (
    <Flex direction="row" my={2}>
      <Flex
        bg="blue.500"
        w={12}
        h={12}
        borderRadius={Math.round(windowWidth + windowHeight) / 2}
        justify="center"
        alignItems="center"
      >
        <Text color={textColor}>{getFirstChar()}</Text>
      </Flex>
      <Box ml={2} flexGrow={1} pt={1}>
        <Flex
          direction="row"
          justify="space-between"
          alignItems="center"
          mr={4}
        >
          <Text color={textColor} fontSize="md" textTransform="capitalize">
            {data.name}
          </Text>
          <Text
            color={!data.borrow ? grayColor : greenColor}
            fontSize="sm"
            fontWeight="bold"
          >
            Rs {data.amount}
          </Text>
        </Flex>
        <Flex
          direction="row"
          justify="space-between"
          alignItems="center"
          mr={4}
        >
          <Text color={textDark} fontSize="sm">
            {data.time}
          </Text>
          <Text color={textDark} fontSize="sm">
            {data.borrow ? " You'll Give" : "You'll Get"}
          </Text>
        </Flex>
        <Divider bg={accentLight} mt={4} />
      </Box>
    </Flex>
  );
};

export default Item;