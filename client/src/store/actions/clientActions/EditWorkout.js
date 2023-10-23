import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useReducer } from "react";

export const EditContext = createContext();
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
export const EditContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const openEdit = () => {
    dispatch({
      type: "OPEN",
      payload: true,
    });
  };
  const closeEdit = () => {
    dispatch({
      type: "CLOSE",
      payload: false,
    });
  };
  return (
    <EditContext.Provider value={{ openEdit, closeEdit, active: state.active }}>
      {children}
    </EditContext.Provider>
  );
};
