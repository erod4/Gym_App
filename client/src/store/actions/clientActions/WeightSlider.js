import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

const WeightSliderContext = createContext();

export const useWeightSliderContext = () => {
  return useContext(WeightSliderContext);
};

export const WeightSliderProvider = ({ children }) => {
  const [isWeightSliderActive, setIsWeightSliderActive] = useState(false);
  const [weightToUse, setWeightToUse] = useState(0);
  const openWeightSlider = (weight) => {
    setIsWeightSliderActive(true);

    setWeightToUse(weight);
  };

  const closeWeightSlider = () => {
    setIsWeightSliderActive(false);
    setWeightToUse(0);
  };
  return (
    <WeightSliderContext.Provider
      value={{
        openWeightSlider,
        closeWeightSlider,
        isWeightSliderActive,
        weightToUse,
      }}
    >
      {children}
    </WeightSliderContext.Provider>
  );
};
