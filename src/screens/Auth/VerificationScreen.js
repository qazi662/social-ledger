// libraries
import React, { useContext, useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

// context
import AuthContext from "../../navigation/AuthProvider";

// firebase
import firebase from "../../utils/firebase";

// components
import Input from "../../components/Forms/Input";
import { Button } from "react-native-paper";

// colors
import { primaryColor } from "../../assets/colors";

const LoginScreen = () => {
  // colors
  const { colors } = useTheme();

  // context
  const { verificationId, verificationCode, setVerificationCode } =
    useContext(AuthContext);

  // states
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../../assets/logo/logo.png")}
          style={styles.logo}
        />
        <Input
          autoFocus
          labelValue={verificationCode}
          autoCompleteType='tel'
          onChangeText={(e) => setVerificationCode(e)}
          iconType='lock'
          placeholderText='Enter verification code'
          textContentType='telephoneNumber'
          keyboardType='phone-pad'
        />
        <Button
          style={styles.button}
          loading={loading}
          color={colors.buttonBackground}
          disabled={!verificationCode}
          mode='contained'
          onPress={async () => {
            setLoading(true);
            try {
              const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode,
              );
              await firebase.auth().signInWithCredential(credential);
              setLoading(false);
            } catch (err) {
              setLoading(false);
              alert(err.messsage);
            }
          }}
        >
          Verify
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
