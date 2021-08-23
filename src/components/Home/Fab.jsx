import React from "react";
import { Icon, Flex } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// utils
import { windowHeight, windowWidth } from "../../utils/dimensions";

const index = ({ handleClick }) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={handleClick}>
      <Flex
        bg="blue.500"
        w={12}
        h={12}
        borderRadius={Math.round(windowWidth + windowHeight) / 2}
        justify="center"
        alignItems="center"
      >
        <Icon as={AntDesign} name="addusergroup" size={6} color="white" />
      </Flex>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 4,
    bottom: 4,
  },
});
