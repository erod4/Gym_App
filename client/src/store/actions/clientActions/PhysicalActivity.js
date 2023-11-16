import React, { createContext, useReducer } from "react";
import AppleHealthKit from "react-native-health";
export const AppleHealthContext = createContext();

const INITIAL_STATE = {
  appleHealthPermissionGranted: false,
  dailySteps: null,
  todaysSteps: null,
  weight: null,
  error: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REQUEST_ACCESS":
      return {
        ...state,
        appleHealthPermissionGranted: payload,
      };
    case "FETCH_TOTAL_STEPS_SUCCESS":
      return {
        ...state,
        dailySteps: payload,
      };
    case "FETCH_TODAYS_STEPS_SUCCESS":
      return {
        ...state,
        todaysSteps: payload,
      };
    case "FETCH_WEIGHT_SUCCESS":
      return {
        ...state,
        weight: payload,
      };
    default:
      return state;
  }
};
export const AppleHealthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const requestPermissions = () => {
    const permissions = {
      permissions: {
        read: [
          AppleHealthKit.Constants.Permissions.Steps,
          AppleHealthKit.Constants.Permissions.Weight,
        ],
        write: [],
      },
    };

    AppleHealthKit.initHealthKit(permissions, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("HealthKit authorization granted.");
        dispatch({
          type: "REQUEST_ACCESS",
          payload: true,
        });
      }
    });
  };
  const getTodaysStep = () => {
    const options = {
      date: new Date().toISOString(),
    };
    AppleHealthKit.getStepCount(options, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        dispatch({
          type: "FETCH_TODAYS_STEPS_SUCCESS",
          payload: results,
        });
      }
    });
  };
  const getDailyStepCount = () => {
    const options = {
      startDate: new Date(2023, 0, 0).toISOString(),
    };
    AppleHealthKit.getDailyStepCountSamples(options, (error, res) => {
      if (error) {
        console.log(error);
      } else {
        const newResults = res.map(({ startDate, value }) => ({
          startDate,
          value,
        }));
        const groupedData = {};

        newResults.forEach((item) => {
          const startDate = item.startDate.split("T")[0]; // Extract date part
          if (groupedData[startDate]) {
            groupedData[startDate] += item.value;
          } else {
            groupedData[startDate] = [item.value];
          }
        });
        console.log(groupedData);
        dispatch({
          type: "FETCH_TOTAL_STEPS_SUCCESS",
          payload: groupedData,
        });
      }
    });
  };
  const getWeight = () => {
    const options = {
      unit: "pound",
      startDate: new Date(2023, 0, 0).toISOString(),
    };
    AppleHealthKit.getWeightSamples(options, (error, res) => {
      if (error) {
        console.log(error);
      } else {
        const weight = res.map(({ startDate, value }) => ({
          startDate,
          value,
        }));

        dispatch({
          type: "FETCH_WEIGHT_SUCCESS",
          payload: weight,
        });
      }
    });
  };
  return (
    <AppleHealthContext.Provider
      value={{
        requestPermissions,
        getDailyStepCount,
        getWeight,
        getTodaysStep,
        dailySteps: state?.dailySteps,
        todaysSteps: state?.todaysSteps,
        weight: state?.weight,
        appleHealthPermissionGranted: state?.appleHealthPermissionGranted,
      }}
    >
      {children}
    </AppleHealthContext.Provider>
  );
};
