//Import Libraires
import React, { createContext, useState, useEffect } from "react";

//Create Context
const DataContext = createContext();

// mockup
import mockup from "../utils/data";

export const DataProvider = ({ children }) => {
  const [transcations, setTranscations] = useState(mockup.customers);

  const addEntry = (_data) => {
    setTranscations([_data, ...transcations]);
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
