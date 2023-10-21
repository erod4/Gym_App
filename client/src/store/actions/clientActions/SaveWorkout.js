import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";
import { useSettingsSliderContext } from "./SettingsSlider";

const SaveContext = createContext();

export const useSaveContext = () => {
  return useContext(SaveContext);
};

export const SaveProvider = ({ children }) => {
  const [isSaveMode, setIsSaveMode] = useState(false);

  const startSaving = () => {
    setIsSaveMode(true);
  };
  const stopSaving = () => {
    setIsSaveMode(false);
  };
  return (
    <SaveContext.Provider value={{ startSaving, stopSaving, isSaveMode }}>
      {children}
    </SaveContext.Provider>
  );
};
