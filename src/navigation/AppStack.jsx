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
import {
  accentColor,
  grayColor,
  primaryColor,
  textColor,
} from "../assets/colors";

// Provider
import { DataProvider } from "../context/UseData";

// screen
import HomeScreen from "../screens/App/HomeScreen";
import ProfileScreen from "../screens/App/Profile/ProfileScreen";
import EditProfileScreen from "../screens/App/Profile/EditProfileScreen";
import ContactScreen from "../screens/App/ContactScreen";
import DetailsScreen from "../screens/App/DetailsScreen";
import AddScreen from "../screens/App/AddScreen";
import EntryScreen from "../screens/App/EntryScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Social Ledger"
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
      }}
    />
  </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
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
      name="EditProfile"
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
      }}
    />
  </Stack.Navigator>
);

const BottomTabs = () => {
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
        name="Home"
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={18} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <DataProvider>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{
              title: "",
              headerTintColor: "white",
              headerStyle: {
                shadowColor: primaryColor,
                elevation: 0,
                backgroundColor: accentColor,
              },
            }}
          />
          <Stack.Screen
            name="Details"
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
                  name="left"
                  size={25}
                  color={textColor}
                  style={{ marginLeft: 10 }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={({ route }) => ({
              title: route.params.name,
              headerTintColor: "white",
              headerStyle: {
                shadowColor: primaryColor,
                elevation: 0,
                backgroundColor: accentColor,
              },
            })}
          />
          <Stack.Screen
            name="Entry"
            component={EntryScreen}
            options={({ route }) => ({
              title: route.params?.title || "",
              headerTintColor: "white",
              headerStyle: {
                shadowColor: primaryColor,
                elevation: 0,
                backgroundColor: accentColor,
              },
              headerTitleStyle: {
                fontSize: 18,
                color: grayColor,
              },
            })}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </DataProvider>
  );
};

export default AppStack;
