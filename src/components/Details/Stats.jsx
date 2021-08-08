// libs
import React from "react";

// components
import { Flex, Text } from "native-base";
import {
  deleteColor,
  secondaryDark,
  successColor,
  textColor,
} from "../../assets/colors";

const Stats = ({ amount }) => {
  return (
    <Flex
      my={3}
      mx={3}
      px={4}
      py={4}
      borderRadius={8}
      backgroundColor={secondaryDark}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Text color={textColor} bold fontSize='md'>
        You will {amount > 0 ? "get" : "give"}
      </Text>
      <Text
        color={amount > 0 ? deleteColor : successColor}
        fontWeight={600}
        fontSize='md'
      >
        Rs. {amount.toString().replaceAll("-", "")}
      </Text>
    </Flex>
  );
};

export default Stats;
