import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

const SettingsSliderContext = createContext();

export const useSettingsSliderContext = () => {
  return useContext(SettingsSliderContext);
};

export const SettingsSliderProvider = ({ children }) => {
  const [isSettingsSliderActive, setIsSettingsSliderActive] = useState(false);
  const openSettingsSlider = () => {
    setIsSettingsSliderActive(true);
  };

  const closeSettingsSlider = () => {
    setIsSettingsSliderActive(false);
  };
  return (
    <SettingsSliderContext.Provider
      value={{
        openSettingsSlider,
        closeSettingsSlider,
        isSettingsSliderActive,
      }}
    >
      {children}
    </SettingsSliderContext.Provider>
  );
};
