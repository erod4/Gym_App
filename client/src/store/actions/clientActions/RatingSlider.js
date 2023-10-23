import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useReducer } from "react";

export const RatingSliderContext = createContext();
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
  return (
    <RatingSliderContext.Provider
      value={{ openRating, closeRating, active: state.active }}
    >
      {children}
    </RatingSliderContext.Provider>
  );
};
