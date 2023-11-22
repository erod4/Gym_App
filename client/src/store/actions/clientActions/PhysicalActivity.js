import React, { createContext, useReducer } from "react";
import AppleHealthKit from "react-native-health";
export const AppleHealthContext = createContext();

const INITIAL_STATE = {
  appleHealthPermissionGranted: false,
  dailySteps: null,
  todaysSteps: null,
  weight: null,
  error: null,
  bmi: null,
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
    case "FETCH_BMI_SUCCESS":
      return {
        ...state,
        bmi: payload,
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
          AppleHealthKit.Constants.Permissions.BodyMassIndex,
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
      startDate: new Date(2023, 8, 0).toISOString(),
    };
    AppleHealthKit.getDailyStepCountSamples(options, (error, res) => {
      if (error) {
        console.log(error);
      } else {
        const newResults = res.map(({ startDate, value }) => ({
          startDate,
          value,
        }));

        const combinedData = newResults.reduce((result, currentItem) => {
          const date = currentItem.startDate.split("T")[0];
          const existingEntry = result.find(
            (item) => item.startDate.split("T")[0] === date
          );

          if (existingEntry) {
            // If there is already an item with the same date, add the values
            existingEntry.value += currentItem.value;
          } else {
            // If there is no item with the same date, add a new item
            result.push({
              startDate: currentItem.startDate,
              value: currentItem.value,
            });
          }

          return result;
        }, []); // Initialize result as an empty array

        dispatch({
          type: "FETCH_TOTAL_STEPS_SUCCESS",
          payload: combinedData,
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
  const getBMI = () => {
    const options = {
      startDate: new Date(2021, 0, 0).toISOString(),
    };
    AppleHealthKit.getBmiSamples(options, (error, res) => {
      if (error) {
        console.log(error);
      } else {
        const bmi = res.map(({ startDate, value }) => ({
          startDate,
          value,
        }));

        dispatch({
          type: "FETCH_BMI_SUCCESS",
          payload: bmi,
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
        getBMI,
        dailySteps: state?.dailySteps,
        todaysSteps: state?.todaysSteps,
        weight: state?.weight,
        bmi: state?.bmi,
        appleHealthPermissionGranted: state?.appleHealthPermissionGranted,
      }}
    >
      {children}
    </AppleHealthContext.Provider>
  );
};
