import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import CountUp from "../components/atoms/CountUp";
import TimerButton from "../components/atoms/StopWatchButton";
import SwitchBetweenButton from "../components/atoms/SwitchBetweenButton";

import { TimerContext } from "../store/actions/clientActions/Timer";
import StopWatchButton from "../components/atoms/StopWatchButton";

const StopWatch = () => {
  const {
    isTimerActive,
    startTimer,
    stopTimer,
    initialTime,
    chosenSetTime,
    reset,
    passTimeToTimer,
  } = useContext(TimerContext);
  const [watch, setWatch] = useState(false);
  const [timerTime, setTimerTime] = useState(0);

  useEffect(() => {
    setTimerTime(chosenSetTime);
    startTimer();
  }, [chosenSetTime, reset]);

  useEffect(() => {
    initialTime(timerTime);
  }, [timerTime]);
  useEffect(() => {
    let interval;
    if (isTimerActive && timerTime > 0) {
      interval = setInterval(() => {
        setTimerTime((prev) => prev - 1);
      }, 1000);
    } else if (isTimerActive && timerTime === 0) {
      stopTimer();
      passTimeToTimer(0);
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isTimerActive, timerTime]);

  const incrementBy30 = () => {
    setTimerTime(timerTime + 30);
  };
  const decrementBy30 = () => {
    setTimerTime(Math.max(0, timerTime - 30));
  };
  const handlePress = () => {
    if (!isTimerActive) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  const setStopWatch = () => {
    setWatch(true);
  };
  const setTimerWatch = () => {
    setWatch(false);
  };
  //timer logic

  //turn timerTime into min and secs

  const timerMins = Math.floor(timerTime / 60);
  const timerSecs = timerTime % 60;
  const formattedTimerMinutes = String(timerMins).padStart(2, "0");
  const formattedTimerSeconds = String(timerSecs).padStart(2, "0");
  return (
    <View style={styles.stopWatch}>
      <View style={styles.switch}>
        <SwitchBetweenButton name={"Stopwatch"} onPress={setStopWatch} />
        <SwitchBetweenButton name={"Timer"} onPress={setTimerWatch} />
      </View>
      {watch && (
        <View style={styles.countUp}>
          <CountUp min={1} sec={1} />
        </View>
      )}
      {!watch && (
        <View style={styles.countUp}>
          <CountUp min={formattedTimerMinutes} sec={formattedTimerSeconds} />
        </View>
      )}

      {watch && (
        <View style={styles.buttons}>
          <StopWatchButton
            color={"#0096c7"}
            // name={isStopWatchRunning ? "Pause" : "Start"}
            // onPress={startStopWatch}
          />
          <StopWatchButton name={"Reset"} color={"#ddd"} />
        </View>
      )}
      {!watch && (
        <View style={styles.buttons}>
          <TimerButton
            name={"-30"}
            color={"rgba(0, 150, 199, 0.25)"}
            onPress={decrementBy30}
            fontColor={"#0096c7"}
          />
          <TimerButton
            color={"#0096c7"}
            name={isTimerActive ? "Pause" : "Start"}
            onPress={handlePress}
            fontColor={"#fff"}
          />
          <TimerButton
            name={"+30"}
            color={"rgba(0, 150, 199, 0.25)"}
            onPress={incrementBy30}
            fontColor={"#0096c7"}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  stopWatch: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
  },
  countUp: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttons: {
    gap: 5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  switch: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    justifyContent: "center",
    position: "absolute",
    top: 0,
  },
});
export default StopWatch;
