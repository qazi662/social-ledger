// libraries
import React, { useState, useContext, useEffect } from "react";

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
import { Avatar } from "react-native-paper";
import Input from "../../../components/Forms/Input";

// assets
import {
  primaryColor,
  secondaryColor,
  textColor,
} from "../../../assets/colors";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const EditProfileScreen = () => {
  // context
  const { user } = useContext(AuthContext);

  // states
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");

  console.log(user);

  useEffect(() => {
    if (user) {
      setPhone(user.phoneNumber);
    }
  }, [user]);

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.wrap}>
          <TouchableOpacity>
            {image ? (
              <Avatar.Image
                size={120}
                source={{
                  uri: image,
                }}
              />
            ) : (
              <View style={styles.placeholderImg}>
                <MaterialCommunityIcons
                  name='image-size-select-actual'
                  color='white'
                  size={50}
                />
              </View>
            )}
          </TouchableOpacity>
          <Input
            labelValue={name}
            autoCompleteType='name'
            onChangeText={(e) => setName(e)}
            placeholderText='Full name'
            iconType='user'
            textContentType='name'
          />
          <Input
            labelValue={business}
            onChangeText={(e) => setBusiness(e)}
            placeholderText='Business name'
            iconType='idcard'
          />
          <Input labelValue={phone} iconType='phone' disabled={true} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: primaryColor,
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  placeholderImg: {
    marginTop: 5,
    height: 120,
    width: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 120 / 2,
    backgroundColor: secondaryColor,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7.84,

    elevation: 5,
  },
  input: {
    width: "100%",
    backgroundColor: secondaryColor,
    color: textColor,
  },
});
