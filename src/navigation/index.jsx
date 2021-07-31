// libraries
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

// auth
import { AuthProvider } from "./AuthProvider";

// components
import Routes from "./Routes";

const Providers = () => {
  // paper theme
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#01172F",
      secondary: "#0F0E0E",
      text: "#fff",
      gray: "#ccc",
      darkGray: "#888",
      accent: "#000300",
      buttonBackground: "#3083DC",
    },
  };

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </AuthProvider>
  );
};

export default Providers;
