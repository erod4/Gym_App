import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

const TimerSliderContext = createContext();

export const useTimerSliderContext = () => {
  return useContext(TimerSliderContext);
};

export const TimerSliderProvider = ({ children }) => {
  const [isTimerSliderActive, setIsTimerSliderActive] = useState(false);
  const openTimerSlider = () => {
    setIsTimerSliderActive(true);
  };

  const closeTimerSlider = () => {
    setIsTimerSliderActive(false);
  };
  return (
    <TimerSliderContext.Provider
      value={{
        openTimerSlider,
        closeTimerSlider,
        isTimerSliderActive,
      }}
    >
      {children}
    </TimerSliderContext.Provider>
  );
};
