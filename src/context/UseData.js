//Import Libraires
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Create Context
const DataContext = createContext();

// mockup
import mockup from "../utils/data";

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
  };

  const addToLocal = async (_transcations) => {
    try {
      await AsyncStorage.setItem("transcations", JSON.stringify(_transcations));
    } catch (e) {
      console.log(e);
    }
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
