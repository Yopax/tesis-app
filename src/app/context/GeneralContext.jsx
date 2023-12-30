import { useState, useContext } from "react";
import { createContext } from "react";

export const GeneralContext = createContext();

export const ContextOneProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState(Array(5).fill(""));
  const [savedData, setSavedData] = useState([]);

  const saveAllData = (descriptions) => {
    setSavedData([...inputValues.map((value, index) => ({ value, description: descriptions[index] }))]);
    setInputValues(Array(inputValues.length).fill(""));
  };

  const getSavedData = () => savedData;

  return (
    <GeneralContext.Provider value={{ inputValues, setInputValues, saveAllData, getSavedData }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (context === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralContext");
  }
  return context;
};