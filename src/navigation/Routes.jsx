// libraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// firebase
// import firebase from "../utils/firebase";
// import "firebase/auth";

// context
import AuthContext from "./AuthProvider";

// stacks
import AuthStack from "./AuthStack";
// import AppStack from "./AppStack";

// to delete
import LandingScreen from "../screens/Auth/LandingScreen";

const Routes = () => {
  const { user, setUser } = React.useContext(AuthContext);
  const [initializing, setInitializing] = React.useState(true);

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // React.useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <LandingScreen /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
