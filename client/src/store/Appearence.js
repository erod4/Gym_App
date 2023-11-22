import { View, Text } from "react-native";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { get, save } from "../../Storage";

export const AppearenceContext = createContext();

const INITIAL_STATE = {
  theme:
    get("theme") == "light" || get("theme") == "dark" ? get("theme") : "light",
  time: get("ellapsedTime") >= 0 ? get("ellapsedTime") : 0,
  isResumeActive: false,
  id: null,
};
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: payload,
      };
    case "ELLAPSED_TIME":
      return {
        ...state,
        time: payload,
      };
    case "RESUME_ACTIVE":
      return {
        ...state,
        isResumeActive: payload,
      };
    case "ID":
      return {
        ...state,
        id: payload,
      };
    default:
      return state;
  }
};
export const AppearenceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const toggleTheme = (theme) => {
    save("theme", theme);
    dispatch({
      type: "TOGGLE_THEME",
      payload: theme,
    });
  };
  const ellapseTime = (time) => {
    save("ellapsedTime", time);
    dispatch({
      type: "ELLAPSED_TIME",
      payload: time,
    });
  };
  const setResume = (isActive) => {
    dispatch({
      type: "RESUME_ACTIVE",
      payload: isActive,
    });
  };
  const setId = (id) => {
    save("id", id);
    dispatch({
      type: "ID",
      payload: id,
    });
  };
  return (
    <AppearenceContext.Provider
      value={{
        toggleTheme,
        theme: state?.theme,
        ellapseTime,
        time: state?.time,
        setResume,
        isResumeActive: state?.isResumeActive,
        setId,
        id: state?.id,
      }}
    >
      {children}
    </AppearenceContext.Provider>
  );
};
