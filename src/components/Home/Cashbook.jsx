// libraries
import React from "react";

// components
import { Flex, Text, Icon } from "native-base";

// assets
import { secondaryDark, textColor } from "../../assets/colors";

// icons
import { MaterialIcons } from "@expo/vector-icons";

const Cashbook = () => {
  return (
    <Flex
      borderRadius={10}
      bg={secondaryDark}
      py={3}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Icon
        as={<MaterialIcons name="book" />}
        color={textColor}
        size="sm"
        mr={1}
      />
      <Text color={textColor} fontWeight={600}>
        OPEN CASHBOOK
      </Text>
    </Flex>
  );
};

export default Cashbook;
