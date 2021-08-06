import React from "react";
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

// utils
import { windowHeight, windowWidth } from "../../utils/dimensions";
import { getInitails } from "../../utils/helper";

const Item = ({ data }) => {
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
        <Text color={textColor} textTransform="uppercase">
          {getInitails(data.name)}
        </Text>
      </Flex>
      <Box ml={3} flexGrow={1} pt={1}>
        <Flex direction="column" justify="center">
          <Text color={textColor} fontSize="md" textTransform="capitalize">
            {data.name}
          </Text>
          <Text color={grayColor} fontSize="sm" fontWeight="bold">
            {data.number}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Item;
