import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useReducer } from "react";

export const SettingsSliderContext = createContext();
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
export const SettingsSliderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const openSettingsSlider = () => {
    dispatch({
      type: "OPEN",
      payload: true,
    });
  };
  const closeSettingsSlider = () => {
    dispatch({
      type: "CLOSE",
      payload: false,
    });
  };
  return (
    <SettingsSliderContext.Provider
      value={{
        openSettingsSlider,
        closeSettingsSlider,
        isSettingsSliderActive: state.active,
      }}
    >
      {children}
    </SettingsSliderContext.Provider>
  );
};
