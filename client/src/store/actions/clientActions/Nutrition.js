import { View, Text } from "react-native";
import React, { createContext, useReducer, useState } from "react";
import { get, save } from "../../../../Storage";

export const NutritionContext = createContext();

const INITIAL_STATE = {
  results: null,
  error: null,
  loading: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOADING":
      return {
        ...state,
        loading: payload,
      };
    case "FETCH_NUTRITION_SUCCESS":
      return {
        ...state,
        results: payload,
        loading: false,
      };
    case "FETCH_NUTRITION_FAIL":
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        loading: false,
        results: payload,
      };
    default:
      return state;
  }
};
export const NutritionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchSearch = async (data) => {
    try {
      dispatch({
        type: "LOADING",
        payload: true,
      });
      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${"AxPPRM3ooNDp4bKak3LPRZmqONGYnDqQTJ4XYZlS"}&query=${encodeURIComponent(
          data
        )}`
      );

      const json = await res.json();

      const top20Results = json.foods.slice(0, 20);

      dispatch({
        type: "FETCH_NUTRITION_SUCCESS",
        payload: top20Results,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_NUTRITION_FAIL",
        payload: error,
      });
    }
  };
  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
      payload: [],
    });
  };
  return (
    <NutritionContext.Provider
      value={{
        fetchSearch,
        results: state?.results,
        clearSearch,
        loading: state?.loading,
      }}
    >
      {children}
    </NutritionContext.Provider>
  );
};
