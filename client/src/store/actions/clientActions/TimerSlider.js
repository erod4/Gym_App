import { View, Text } from "react-native";
import React, { createContext, useContext, useReducer, useState } from "react";

export const TimerSliderContext = createContext();

const INITIAL_STATE = {
  isTimerSliderActive: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IS_TIMERSLIDER_OPEN":
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
  const handleTimer = (isOpen) => {
    dispatch({
      type: "IS_TIMERSLIDER_OPEN",
      payload: isOpen,
    });
  };

  return (
    <TimerSliderContext.Provider
      value={{
        handleTimer,
        isTimerSliderActive: state?.isTimerSliderActive,
      }}
    >
      {children}
    </TimerSliderContext.Provider>
  );
};
