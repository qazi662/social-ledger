// libraries
import React from "react";

// components
import { StyleSheet, Text, View, ScrollView } from "react-native";

// assets
import { primaryColor } from "../../assets/colors";

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: primaryColor,
    height: "100%",
  },
});
