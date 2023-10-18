import { View, Text, StyleSheet, Vibration } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "../components/atoms/CountUp";
import TimerButton from "../components/atoms/TimerButton";
import SwitchBetweenButton from "../components/atoms/SwitchBetweenButton";
import StopWatchButton from "../components/atoms/StopWatchButton";

const StopWatch = ({ time }) => {
  time = time * 60;

  const [isStopWatchRunning, setIsStopWatchRunning] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [stopWatchSeconds, setStopWatchSeconds] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const intervalRef = useRef(null);
  const [watch, setWatch] = useState(false);
  const startTimer = () => {
    if (isTimerRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTimerSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            // Timer reached 0, handle completion logic if needed
            Vibration.vibrate([1000, 1000, 1000]);
            clearInterval(intervalRef.current);
            setIsTimerRunning(false);
            return prevSeconds; // or return 0 if you want to reset the timer to 0
          }
        });
      }, 1000);
    }
    setIsTimerRunning(!isTimerRunning);
  };

  const incrementTimer = (time) => {
    setTimerSeconds((prevSeconds) => prevSeconds + time);
  };
  const incrementBy30 = () => {
    incrementTimer(30);
  };
  const decrementTimer = () => {
    clearInterval(intervalRef.current);
    setTimerSeconds((prevSeconds) => Math.max(0, prevSeconds - 30));
  };

  const startStopWatch = () => {
    if (isStopWatchRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setStopWatchSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    setIsStopWatchRunning(!isStopWatchRunning);
  };
  const resetStopWatch = () => {
    clearInterval(intervalRef.current);
    setStopWatchSeconds(0);
    setIsStopWatchRunning(false);
  };
  const stopWatchMin = String(Math.floor(stopWatchSeconds / 60)).padStart(
    2,
    "0"
  );
  const stopWatchSec = String(stopWatchSeconds % 60).padStart(2, "0");
  const timerMin = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const timerSec = String(timerSeconds % 60).padStart(2, "0");

  const setStopWatch = () => {
    setWatch(true);
  };
  const setTimerWatch = () => {
    setWatch(false);
  };

  useEffect(() => {
    if (time > 0) {
      setTimerSeconds(0);
      incrementTimer(time);
    }
  }, [time]);
  return (
    <View style={styles.stopWatch}>
      <View style={styles.switch}>
        <SwitchBetweenButton name={"Stopwatch"} onPress={setStopWatch} />
        <SwitchBetweenButton name={"Timer"} onPress={setTimerWatch} />
      </View>
      {watch && (
        <View style={styles.countUp}>
          <CountUp min={stopWatchMin} sec={stopWatchSec} />
        </View>
      )}
      {!watch && (
        <View style={styles.countUp}>
          <CountUp min={timerMin} sec={timerSec} />
        </View>
      )}

      {watch && (
        <View style={styles.buttons}>
          <TimerButton
            color={"#0077B6"}
            name={isStopWatchRunning ? "Pause" : "Start"}
            onPress={startStopWatch}
          />
          <TimerButton name={"Reset"} color={"#ddd"} onPress={resetStopWatch} />
        </View>
      )}
      {!watch && (
        <View style={styles.buttons}>
          <StopWatchButton
            name={"-30"}
            color={"#ddd"}
            onPress={decrementTimer}
          />
          <StopWatchButton
            color={"#0077B6"}
            name={isTimerRunning ? "Pause" : "Start"}
            onPress={startTimer}
          />
          <StopWatchButton
            name={"+30"}
            color={"#ddd"}
            onPress={incrementBy30}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  stopWatch: {
    backgroundColor: "#fff",
    width: "90%",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  countUp: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
  },
});
export default StopWatch;
