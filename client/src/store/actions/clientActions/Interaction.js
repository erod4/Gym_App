import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useReducer } from "react";

export const InteractionContext = createContext();
const INITIAL_STATE = {
  active: null,
  id: null,
  display: "none",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ACTIVE":
      return {
        ...state,
        active: payload.name,
        id: payload.id,
      };
    case "SET_TIMER_ACTIVE":
      return {
        ...state,
        display: payload,
      };
    default:
      return state;
  }
};
export const InteractionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setActive = (name, id) => {
    dispatch({
      type: "SET_ACTIVE",
      payload: { name, id },
    });
  };
  const setTimerActive = (display) => {
    dispatch({
      type: "SET_TIMER_ACTIVE",
      payload: display,
    });
  };
  return (
    <InteractionContext.Provider
      value={{
        setActive,
        activeInteraction: state?.active,
        id: state?.id,
        setTimerActive,
        display: state?.display,
      }}
    >
      {children}
    </InteractionContext.Provider>
  );
};
