// libraries
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// components
import Swiper from "../../components/Onboarding/Swiper";

export default OnboardingScreen = ({ navigation }) => {
  return (
    <Swiper navigation={navigation}>
      {/* First screen */}
      <View style={[styles.slide, { backgroundColor: "#C04DEE" }]}>
        <Image
          style={styles.img}
          source={require("../../assets/onboarding/onboarding-img1.png")}
        />
        <Text style={styles.header}>100% free!</Text>
        <Text style={styles.text}>
          It is 100% Free, Safe and Secure for all types of businesses to
          maintain their customers' accounts.
        </Text>
      </View>
      {/* Second screen */}
      <View style={[styles.slide, { backgroundColor: "#4AAFEE" }]}>
        <Image
          style={styles.img}
          source={require("../../assets/onboarding/onboarding-img2.png")}
        />
        <Text style={styles.header}>3 times faster returns on payments</Text>
        <Text style={styles.text}>
          Gone are the days when businessmen used to maintain daily record of
          transactions manually.
        </Text>
      </View>
      {/* Third screen */}
      <View style={[styles.slide, { backgroundColor: "#FC515B" }]}>
        <Image
          style={styles.img}
          source={require("../../assets/onboarding/onboarding-img3.png")}
        />
        <Text style={styles.header}>Handle multiple businesses</Text>
        <Text style={styles.text}>
          Simple and easy to use design to handle multiple businesses.
        </Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  // image
  img: {
    height: 150,
    resizeMode: "contain",
  },
  // Header styles
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  // Text below header
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center",
  },
});
