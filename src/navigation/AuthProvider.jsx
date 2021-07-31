// libraries
import React, { createContext, useState } from "react";

// firebase
import firebase from "../utils/firebase";

// context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // states
  const [user, setUser] = useState(null);
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        verificationId,
        setVerificationId,
        verificationCode,
        setVerificationCode,

        logout: async () => {
          try {
            await firebase.auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
