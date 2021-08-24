import React from "react";

import { Flex, Box, Button, Text } from "native-base";

// colors
import { accentColor, secondaryDark, secondayLight } from "../../assets/colors";

const AddScreen = ({ route, navigation }) => {
  const handleClick = (_type) => {
    navigation.navigate("Entry", {
      type: _type,
      name: route.params.name,
      phoneNumber: route.params.number,
    });
  };

  return (
    <Flex h="100%" bg={secondaryDark} justifyContent="flex-end">
      <Box px={4} pt={4} pb={12}>
        <Text textAlign="center">
          Add first transcation of {route.params.name}
        </Text>
      </Box>
      <Flex direction="row" p={4}>
        <Button
          flexGrow={1}
          bgColor={secondayLight}
          mr={2}
          onPress={() => handleClick("gave")}
        >
          YOU GAVE Rs
        </Button>
        <Button
          flexGrow={1}
          bgColor={secondayLight}
          onPress={() => handleClick("got")}
        >
          YOU GOT Rs
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddScreen;
