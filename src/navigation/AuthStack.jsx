// libraries
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

// assets
import { primaryColor, textColor } from "../assets/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

// screens
// import SignupScreen from "../screens/Auth/SignupScreen";
import LandingScreen from "../screens/Auth/LandingScreen";
import OnboardingScreen from "../screens/Auth/OnboardingScreen";
import PhoneNumberScreen from "../screens/Auth/PhoneNumberScreen";

// stack nav
const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  let routeName;

  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = "Onboarding";
  } else {
    routeName = "Login";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name='Onboarding'
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Landing'
        component={LandingScreen}
        options={{ header: () => null }}
      />
      {/* <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{ header: () => null }}
      /> */}
      <Stack.Screen
        name='PhoneNumber'
        component={PhoneNumberScreen}
        options={({ navigation }) => ({
          title: "Enter Phone Number",
          headerTintColor: textColor,
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <AntDesign
                name='left'
                size={25}
                color={textColor}
                onPress={() => navigation.navigate("Landing")}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
