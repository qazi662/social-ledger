// libraries
import React, { createContext, useState } from "react";

// firebase
// import firebase from "../utils/firebase";
// import "firebase/firestore";
// import "firebase/auth";

// context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // states
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // login: async (email, password) => {
        //   try {
        //     await firebase.auth().signInWithEmailAndPassword(email, password);
        //   } catch (e) {
        //     console.log(e);
        //   }
        // },
        // register: async (email, password) => {
        //   try {
        //     await firebase
        //       .auth()
        //       .createUserWithEmailAndPassword(email, password)
        //       .then(() => {
        //         firebase
        //           .firestore()
        //           .collection("users")
        //           .doc(auth().currentUser.uid)
        //           .set({
        //             fname: "",
        //             lname: "",
        //             email: email,
        //             createdAt: firestore.Timestamp.fromDate(new Date()),
        //             userImg: null,
        //           })
        //           .catch((error) => {
        //             console.log(
        //               "Something went wrong with added user to firestore: ",
        //               error,
        //             );
        //           });
        //       })
        //       .catch((error) => {
        //         console.log("Something went wrong with sign up: ", error);
        //       });
        //   } catch (e) {
        //     console.log(e);
        //   }
        // },
        // logout: async () => {
        //   try {
        //     await firebase.auth().signOut();
        //   } catch (e) {
        //     console.log(e);
        //   }
        // },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
