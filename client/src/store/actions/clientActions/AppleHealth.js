import React, { createContext, useState, useEffect, useContext } from "react";
import AppleHealthKit, {
  HealthKitPermissions,
  HealthValue,
} from "react-native-health"; // Assuming you have installed the library

const HealthContext = createContext();

export const useHealth = () => {
  return useContext(HealthContext);
};

export const HealthProvider = ({ children }) => {
  const [stepCount, setStepCount] = useState(0);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  useEffect(() => {
    async function requestHealthKitPermissions() {
      const permissions = {
        permissions: {
          read: [AppleHealthKit.Constants.Permissions.Steps],
          write: [],
        },
      }; // You can add more types like 'HeartRate', 'DistanceWalkingRunning', etc.
      const result = await AppleHealthKit.initHealthKit(
        permissions,
        (error, res) => {
          if (error) {
            console.log("HealthKit authorization denied.");
          } else {
            console.log("HealthKit authorization granted!");
            fetchStepCount();
            setIsPermissionGranted(true);
          }
        }
      );
    }

    if (!isPermissionGranted) {
      requestHealthKitPermissions();
    }
  }, [isPermissionGranted]); // Empty dependency array ensures the effect runs once after the initial render

  async function fetchStepCount() {
    try {
      const options = {
        unit: "count",
      };
      const stepCountData = await AppleHealthKit.getStepCount(
        options,
        (error, res) => {
          if (error) {
            log(error);
          } else {
            setStepCount(res);
          }
        }
      );
      setStepCount(stepCountData);
    } catch (error) {
      console.error("Error fetching step count:", error);
    }
  }

  const value = {
    stepCount,
    // Add more health data properties and functions as needed
  };

  return (
    <HealthContext.Provider value={value}>{children}</HealthContext.Provider>
  );
};
