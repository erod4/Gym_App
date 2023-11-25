import { View, Text } from "react-native";
import React, { createContext, useState, useContext, useReducer } from "react";

export const TimerContext = createContext();

const INITIAL_STATE = {
  seconds: 0,
  chosenSetTime: 0,
  isTimerActive: false,
  reset: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "START":
      return {
        ...state,
        isTimerActive: payload,
      };

    case "STOP":
      return {
        ...state,
        isTimerActive: payload,
      };
    case "PASS_TIME":
      return {
        ...state,
        chosenSetTime: payload.time,
        reset: payload.reset,
      };
    case "INIT_TIME":
      return {
        ...state,
        seconds: payload,
      };
    default:
      return state;
  }
};
export const TimerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const passTimeToTimer = (time, reset) => {
    if (time == state?.chosenSetTime) {
      dispatch({
        type: "PASS_TIME",
        payload: { time, reset },
      });
    } else {
      dispatch({
        type: "PASS_TIME",
        payload: { time, reset: false },
      });
    }
  };

  const startTimer = () => {
    dispatch({
      type: "START",
      payload: true,
    });
  };

  const stopTimer = () => {
    dispatch({
      type: "START",
      payload: false,
    });
  };

  const initialTime = (time) => {
    dispatch({
      type: "INIT_TIME",
      payload: time,
    });
  };

  return (
    <TimerContext.Provider
      value={{
        startTimer,
        stopTimer,
        isTimerActive: state?.isTimerActive,
        seconds: state?.seconds,
        initialTime,
        passTimeToTimer,
        chosenSetTime: state?.chosenSetTime,
        reset: state?.reset,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
