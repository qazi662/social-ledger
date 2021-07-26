import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
});
