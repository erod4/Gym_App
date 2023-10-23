import { View, Text } from "react-native";
import React, { createContext, useContext, useReducer, useState } from "react";

export const TimerSliderContext = createContext();

const INITIAL_STATE = {
  isTimerSliderActive: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN":
      return {
        ...state,
        isTimerSliderActive: payload,
      };
    case "CLOSE":
      return {
        ...state,
        isTimerSliderActive: payload,
      };

    default:
      return state;
  }
};

export const TimerSliderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const openTimerSlider = () => {
    dispatch({
      type: "OPEN",
      payload: true,
    });
  };

  const closeTimerSlider = () => {
    dispatch({
      type: "OPEN",
      payload: false,
    });
  };
  return (
    <TimerSliderContext.Provider
      value={{
        openTimerSlider,
        closeTimerSlider,
        isTimerSliderActive: state.isTimerSliderActive,
      }}
    >
      {children}
    </TimerSliderContext.Provider>
  );
};
