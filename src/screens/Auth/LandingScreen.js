// libraries
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

// components
import Button from "../../components/Forms/Button";

// colors
import { darkGrayColor, primaryColor, textColor } from "../../assets/colors";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../../assets/logo/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>
          Manage your business: Send reminders and receive payments!
        </Text>
        <Button
          buttonTitle='Start using Social Ledger'
          onPress={() => navigation.navigate("PhoneNumber")}
        />
        <Text style={styles.disclaimer}>
          By logging in you agree to our{" "}
          <TouchableOpacity>
            <Text style={styles.innerText}>Privacy Policy</Text>
          </TouchableOpacity>{" "}
          and{" "}
          <TouchableOpacity>
            <Text style={styles.innerText}>Terms & Conditions</Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: primaryColor,
    height: "100%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: primaryColor,
    height: "100%",
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: "cover",
  },
  text: {
    marginBottom: 20,
    color: textColor,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  disclaimer: {
    color: darkGrayColor,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    lineHeight: 20,
    fontSize: 10,
  },
  innerText: {
    color: textColor,
    margin: 0,
    fontSize: 10,
  },
});
