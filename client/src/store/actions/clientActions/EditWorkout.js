import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";
import { useSettingsSliderContext } from "./SettingsSlider";

const EditContext = createContext();

export const useEditContext = () => {
  return useContext(EditContext);
};

export const EditProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedData, setEditedData] = useState(null);

  const startEditing = () => {
    setIsEditMode(true);
  };
  const stopEditing = () => {
    setIsEditMode(false);
  };
  return (
    <EditContext.Provider value={{ startEditing, stopEditing, isEditMode }}>
      {children}
    </EditContext.Provider>
  );
};
