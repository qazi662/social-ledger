// libraries
import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

// firebase
import firebase from "../../utils/firebase";

// components
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

// colors
import { primaryColor } from "../../assets/colors";

const LoginScreen = () => {
  // states
  const [phone, setPhone] = useState();
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const [message, showMessage] = React.useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  // ref
  const recaptchaVerifier = React.useRef(null);

  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification
        />
        <Image
          source={require("../../assets/logo/logo.png")}
          style={styles.logo}
        />
        <Input
          autoFocus
          labelValue={phone}
          autoCompleteType='tel'
          onChangeText={(e) => setPhone(e)}
          placeholderText='+1 999 999 999'
          iconType='phone'
          textContentType='telephoneNumber'
          keyboardType='phone-pad'
        />
        <Button
          buttonTitle='Send Verification Code'
          disabled={!phone}
          onPress={async () => {
            try {
              const phoneProvider = new firebase.auth.PhoneAuthProvider();
              const verificationId = await phoneProvider.verifyPhoneNumber(
                phone,
                recaptchaVerifier.current,
              );
              setVerificationId(verificationId);
              showMessage({
                text: "Verification code has been sent to your phone.",
              });
            } catch (err) {
              showMessage({ text: `Error: ${err.message}`, color: "red" });
            }
          }}
        />
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
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: "cover",
  },
});
