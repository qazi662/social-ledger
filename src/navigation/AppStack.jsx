// libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import { NativeBaseProvider } from "native-base";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

// assets
import { accentColor, primaryColor, textColor } from "../assets/colors";

// components
import { View } from "react-native";

// screen
import HomeScreen from "../screens/App/HomeScreen";
import ProfileScreen from "../screens/App/Profile/ProfileScreen";
import EditProfileScreen from "../screens/App/Profile/EditProfileScreen";
import ContactScreen from "../screens/App/ContactScreen";
import DetailsScreen from "../screens/App/DetailsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => (
  <NativeBaseProvider>
    <Stack.Navigator>
      <Stack.Screen
        name='Social Ledger'
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: textColor,
            fontSize: 16,
          },
          headerStyle: {
            shadowColor: primaryColor,
            elevation: 0,
            backgroundColor: accentColor,
          },
          // headerRight: () => (
          //   <View style={{ marginRight: 10 }}>
          //     <FontAwesome5 name='plus' size={16} color={textColor} />
          //   </View>
          // ),
        }}
      />
      <Stack.Screen
        name='Contact'
        component={ContactScreen}
        options={{
          title: "",
          headerTintColor: "white",
          headerStyle: {
            shadowColor: primaryColor,
            elevation: 0,
            backgroundColor: accentColor,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <AntDesign
              name='left'
              size={25}
              color={textColor}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: "white",
          headerStyle: {
            shadowColor: primaryColor,
            elevation: 0,
            backgroundColor: accentColor,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <AntDesign
              name='left'
              size={25}
              color={textColor}
              style={{ marginLeft: 10 }}
            />
          ),
        })}
      />
      {/* <Stack.Screen
      name='AddPost'
      component={AddPostScreen}
      options={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#2e64e515",
          shadowColor: "#2e64e515",
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name='arrow-back' size={25} color='#2e64e5' />
          </View>
        ),
      }}
    /> */}
      {/* <Stack.Screen
      name='HomeProfile'
      component={ProfileScreen}
      options={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name='arrow-back' size={25} color='#2e64e5' />
          </View>
        ),
      }}
    /> */}
    </Stack.Navigator>
  </NativeBaseProvider>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: textColor,
          fontSize: 16,
        },
        headerStyle: {
          shadowColor: primaryColor,
          elevation: 0,
          backgroundColor: accentColor,
        },
      }}
    />
    <Stack.Screen
      name='EditProfile'
      component={EditProfileScreen}
      options={{
        headerTitle: "Edit Profile",
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: textColor,
          fontSize: 16,
        },
        headerStyle: {
          shadowColor: primaryColor,
          elevation: 0,
          backgroundColor: accentColor,
        },
        // headerLeft:{
        //    he
        // }
        // headerLeft: () => (
        //   <View style={{ marginLeft: 10 }}>
        //     <AntDesign
        //       name='left'
        //       size={25}
        //       color={textColor}
        //       onPress={() => navigation.goBack()}
        //     />
        //   </View>
        // ),
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  // colors
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.text,
        style: { backgroundColor: colors.accent, shadowColor: colors.accent },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={20} />
          ),
        })}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='person' color={color} size={18} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
