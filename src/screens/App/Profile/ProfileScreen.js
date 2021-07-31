// libraries
import React, { useContext } from "react";

// context
import AuthContext from "../../../navigation/AuthProvider";

// components
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// assets
import {
  primaryColor,
  secondaryColor,
  textColor,
} from "../../../assets/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import Antdesign from "react-native-vector-icons/AntDesign";

const ProfileScreen = ({ navigation }) => {
  // context
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={styles.button}
        >
          <>
            <Ionicons name='settings' color={textColor} size={26} />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <>
            <Ionicons name='information-circle' color={textColor} size={26} />
            <Text style={styles.buttonText}>About Us</Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={styles.button}>
          <>
            <Antdesign name='logout' color={textColor} size={26} />
            <Text style={styles.buttonText}>Sign Out</Text>
          </>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: primaryColor,
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: secondaryColor,
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: textColor,
    paddingLeft: 15,
    fontSize: 16,
  },
});
