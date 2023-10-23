import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useReducer } from "react";

export const SaveContext = createContext();
const INITIAL_STATE = {
  active: false,
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
    default:
      return state;
  }
};
export const SaveContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const startSaving = () => {
    dispatch({
      type: "OPEN",
      payload: true,
    });
  };
  const stopSaving = () => {
    dispatch({
      type: "CLOSE",
      payload: false,
    });
  };
  return (
    <SaveContext.Provider
      value={{ startSaving, stopSaving, saveActive: state.active }}
    >
      {children}
    </SaveContext.Provider>
  );
};
