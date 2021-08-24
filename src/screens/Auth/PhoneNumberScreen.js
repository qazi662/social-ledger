// libraries
import React, { useState, useContext } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

// context
import AuthContext from "../../navigation/AuthProvider";

// firebase
import firebase from "../../utils/firebase";

// components
import Input from "../../components/Forms/Input";
import { Button } from "react-native-paper";

// colors
import { primaryColor } from "../../assets/colors";

const LoginScreen = ({ navigation }) => {
  // colors
  const { colors } = useTheme();

  // context
  const { setVerificationId } = useContext(AuthContext);

  // states
  const [phone, setPhone] = useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  const [loading, setLoading] = useState(false);

  // ref
  const recaptchaVerifier = React.useRef(null);

  const savePhoneNumber = async (_phone) => {
    try {
      await AsyncStorage.setItem("number", _phone);
    } catch (e) {
      console.log(e);
    }
  };

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
          autoCompleteType="tel"
          onChangeText={(e) => setPhone(e)}
          placeholderText="+1 999 999 999"
          iconType="phone"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
        />
        <Button
          style={styles.button}
          loading={loading}
          color={colors.buttonBackground}
          disabled={!phone}
          mode="contained"
          onPress={async () => {
            setLoading(true);
            try {
              const phoneProvider = new firebase.auth.PhoneAuthProvider();
              const verificationId = await phoneProvider.verifyPhoneNumber(
                phone,
                recaptchaVerifier.current
              );
              setVerificationId(verificationId);
              savePhoneNumber(phone);
              navigation.navigate("VerificationScreen");
              setLoading(false);
            } catch (err) {
              alert(err.message);
              setLoading(false);
            }
          }}
        >
          Send Verification Code
        </Button>
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
  button: {
    marginTop: 20,
  },
});
