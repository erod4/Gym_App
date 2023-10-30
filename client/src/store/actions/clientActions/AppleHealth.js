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
  const [weight, setWeight] = useState(0);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  useEffect(() => {
    async function requestHealthKitPermissions() {
      const permissions = {
        permissions: {
          read: [
            AppleHealthKit.Constants.Permissions.Steps,
            AppleHealthKit.Constants.Permissions.Weight,
          ],
          write: [],
        },
      }; // You can add more types like 'HeartRate', 'DistanceWalkingRunning', etc.
      const result = AppleHealthKit.initHealthKit(permissions, (error, res) => {
        if (error) {
          console.log("HealthKit authorization denied.");
        } else {
          console.log("HealthKit authorization granted!");
          fetchStepCount();
          fetchWeight();
          setIsPermissionGranted(true);
        }
      });
    }

    if (!isPermissionGranted) {
      requestHealthKitPermissions();
    }
  }, [isPermissionGranted]); // Empty dependency array ensures the effect runs once after the initial render

  function fetchStepCount() {
    try {
      const options = {
        startDate: new Date(2023, 0, 0).toISOString(),
      };
      const stepCountData = AppleHealthKit.getDailyStepCountSamples(
        options,
        (error, res) => {
          if (error) {
            console.log(error);
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
  function fetchWeight() {
    try {
      const options = {
        unit: "pound",
        startDate: new Date(2023, 0, 0).toISOString(),
      };
      const weightData = AppleHealthKit.getWeightSamples(
        options,
        (error, res) => {
          if (error) {
            log(error);
          } else {
            setWeight(res);
          }
        }
      );
      setWeight(weightData);
    } catch (error) {
      console.error("Error fetching step count:", error);
    }
  }
  const value = {
    stepCount,
    weight,
    // Add more health data properties and functions as needed
  };

  return (
    <HealthContext.Provider value={value}>{children}</HealthContext.Provider>
  );
};
