import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export const useTimerContext = () => {
  return useContext(TimerContext);
};

export const TimerProvider = ({ children }) => {
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [chosenSetTime, setChosenSetTime] = useState(0);

  const passTimeToTimer = (time) => {
    setChosenSetTime(time);
  };

  const startTimer = () => {
    setIsTimerActive(true);
  };

  const stopTimer = () => {
    setIsTimerActive(false);
  };

  const initialTime = (time) => {
    setSeconds(time);
  };

  return (
    <TimerContext.Provider
      value={{
        startTimer,
        stopTimer,
        isTimerActive,
        seconds,
        initialTime,
        passTimeToTimer,
        chosenSetTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
