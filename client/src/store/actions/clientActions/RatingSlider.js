import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useReducer } from "react";

export const RatingSliderContext = createContext();
const INITIAL_STATE = {
  active: false,
  isWaterSliderActive: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN":
      return {
        ...state,
        active: payload,
      };
    case "CLOSE":
      return {
        ...state,
        active: payload,
      };
    case "OPEN_WATER":
      return {
        ...state,
        active: false,
        isWaterSliderActive: payload,
      };
    case "CLOSE_WATER":
      return {
        ...state,
        isWaterSliderActive: payload,
      };
    default:
      return state;
  }
};
export const RatingSliderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const openRating = () => {
    dispatch({
      type: "OPEN",
      payload: true,
    });
  };
  const closeRating = () => {
    dispatch({
      type: "CLOSE",
      payload: false,
    });
  };
  const openWaterSlider = () => {
    dispatch({
      type: "OPEN_WATER",
      payload: true,
    });
  };
  const closeWaterSlider = () => {
    dispatch({
      type: "CLOSE_WATER",
      payload: false,
    });
  };
  return (
    <RatingSliderContext.Provider
      value={{
        openRating,
        closeRating,
        active: state.active,
        openWaterSlider,
        closeWaterSlider,
        openWaterSlider,
        closeWaterSlider,
        isWaterSliderActive: state.isWaterSliderActive,
      }}
    >
      {children}
    </RatingSliderContext.Provider>
  );
};
