// libraries
import React from "react";

// components
import { Box, Flex, Text, Heading, Divider, Icon } from "native-base";

// assets
import {
  accentLight,
  greenColor,
  secondaryDark,
  textColor,
  textDark,
} from "../../assets/colors";

// icons
import { MaterialIcons } from "@expo/vector-icons";

// utils
import { getOverAll, getTotal } from "../../utils/helper";

const ReportCard = ({ transcations }) => {
  return (
    <Box borderRadius={10} bg={secondaryDark} py={4}>
      <Flex
        w="100%"
        direction="row"
        justify="space-evenly"
        alignItems="center"
        py={4}
      >
        <Flex direction="column" justify="center" alignItems="center">
          <Text color={textColor} fontSize="md">
            Rs {getOverAll(transcations).will_get}
          </Text>
          <Text color={textDark} fontSize="xs">
            You got
          </Text>
        </Flex>
        <Divider orientation="vertical" bg={accentLight} />
        <Flex direction="column" justify="center" alignItems="center">
          <Text color={greenColor} fontSize="md">
            Rs {getOverAll(transcations).will_give}
          </Text>
          <Text color={textDark} fontSize="xs">
            You gave
          </Text>
        </Flex>
      </Flex>
      {/* <Divider bg={accentLight} /> */}
      {/* <Flex
        pt={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Text color={textColor} fontWeight={600}>
          VIEW REPORT
        </Text>
        <Icon
          as={<MaterialIcons name="chevron-right" />}
          color={textColor}
          size="sm"
          ml={1}
        />
      </Flex> */}
    </Box>
  );
};

export default ReportCard;
