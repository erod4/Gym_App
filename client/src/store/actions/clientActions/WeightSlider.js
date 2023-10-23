import { View, Text } from "react-native";
import React, { createContext, useContext, useReducer, useState } from "react";

export const WeightSliderContext = createContext();

const INITIAL_STATE = {
  weightToUse: 0,
  isWeightSliderActive: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "OPEN":
      return {
        ...state,
        isWeightSliderActive: payload.isWeightSliderActive,
        weightToUse: payload.weight,
      };

    case "CLOSE":
      return {
        ...state,
        isWeightSliderActive: payload.isWeightSliderActive,
        weightToUse: payload.weight,
      };

    default:
      return state;
  }
};
export const WeightSliderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const openWeightSlider = (weight) => {
    dispatch({
      type: "OPEN",
      payload: { weight, isWeightSliderActive: true },
    });
  };

  const closeWeightSlider = () => {
    dispatch({
      type: "CLOSE",
      payload: { weight: 0, isWeightSliderActive: false },
    });
  };
  return (
    <WeightSliderContext.Provider
      value={{
        openWeightSlider,
        closeWeightSlider,
        isWeightSliderActive: state.isWeightSliderActive,
        weightToUse: state.weightToUse,
      }}
    >
      {children}
    </WeightSliderContext.Provider>
  );
};
