// libraries
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

// colors
import { secondaryColor, textColor } from "../../assets/colors";

// utils
import { windowHeight } from "../../utils/dimensions";

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    backgroundColor: secondaryColor,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: textColor,
    textTransform: "uppercase",
  },
});
