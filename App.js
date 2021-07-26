// // libraries
// import React, { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// // screens
// import OnboardingScreen from "./src/screens/OnboardingScreen";
// import LoginScreen from "./src/screens/LoginScreen";

// // app stack
// const AppStack = createStackNavigator();

// export default function App() {
//   // states
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem("alreadyLaunched").then((value) => {
//       if (value == null) {
//         AsyncStorage.setItem("alreadyLaunched", "true");
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     });
//   }, []);

//   if (isFirstLaunch === null) {
//     return null;
//   } else if (isFirstLaunch === true) {
//     return (
//       <NavigationContainer>
//         <AppStack.Navigator headerMode='none'>
//           <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
//           <AppStack.Screen name='Login' component={LoginScreen} />
//         </AppStack.Navigator>
//       </NavigationContainer>
//     );
//   } else {
//     return <LoginScreen />;
//   }
// }

// libraries
import React from "react";

// components
import Providers from "./src/navigation";

const App = () => {
  return <Providers />;
};

export default App;
