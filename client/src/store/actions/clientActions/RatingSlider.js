import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

const RatingSliderContext = createContext();

export const useRatingSliderContext = () => {
  return useContext(RatingSliderContext);
};

export const RatingSliderProvider = ({ children }) => {
  const [isRatingSliderActive, setIsRatingSliderActive] = useState(false);
  const openRatingSlider = () => {
    setIsRatingSliderActive(true);
  };

  const closeRatingSlider = () => {
    setIsRatingSliderActive(false);
  };
  return (
    <RatingSliderContext.Provider
      value={{
        openRatingSlider,
        closeRatingSlider,
        isRatingSliderActive,
      }}
    >
      {children}
    </RatingSliderContext.Provider>
  );
};
