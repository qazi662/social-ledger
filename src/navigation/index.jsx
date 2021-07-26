// libraries
import React from "react";

// auth
import { AuthProvider } from "./AuthProvider";

// components
import Routes from "./Routes";

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
