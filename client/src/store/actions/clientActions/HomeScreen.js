import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useReducer } from "react";

export const HomeScreenContext = createContext();
const INITIAL_STATE = {
  active: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ACTIVE":
      return {
        ...state,
        active: payload,
      };

    default:
      return state;
  }
};
export const HomeScreenContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setActive = (name) => {
    dispatch({
      type: "SET_ACTIVE",
      payload: name,
    });
  };

  return (
    <HomeScreenContext.Provider
      value={{
        active: state?.active,
        setActive,
      }}
    >
      {children}
    </HomeScreenContext.Provider>
  );
};
