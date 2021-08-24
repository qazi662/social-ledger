//Import Libraires
import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Create Context
const DataContext = createContext();

// context
import AuthContext from "../navigation/AuthProvider";

// collection
import { PeersCollection } from "../utils/collections";

export const DataProvider = ({ children }) => {
  const [transcations, setTranscations] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("transcations").then((_transcations) => {
      if (_transcations !== null) {
        setTranscations(JSON.parse(_transcations));
      }
    });
  }, []);

  const addEntry = (_data) => {
    setTranscations([_data, ...transcations]);
    addToLocal([_data, ...transcations]);
    addToFirebase([_data, ...transcations]);
  };

  const addToLocal = async (_transcations) => {
    try {
      await AsyncStorage.setItem("transcations", JSON.stringify(_transcations));
    } catch (e) {
      console.log(e);
    }
  };

  const addToFirebase = async (_transcations) => {
    AsyncStorage.getItem("number").then((_phone) => {
      if (_phone !== null) {
        try {
          PeersCollection.doc(_phone).set({
            name: "",
            business_name: "",
            phone: _phone,
            transcations: _transcations,
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  const removeStorage = async () => {
    try {
      await AsyncStorage.removeItem("transcations");
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };

  return (
    <DataContext.Provider
      value={{
        transcations,
        setTranscations,
        addEntry,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
