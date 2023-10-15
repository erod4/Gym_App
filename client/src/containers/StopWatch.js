import { View, Text, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import CountUp from "../components/atoms/CountUp";
import TimerButton from "../components/atoms/TimerButton";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const startStopWatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };
  const resetStopWatch = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
  };
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");

  return (
    <View style={styles.stopWatch}>
      <View style={styles.countUp}>
        <CountUp min={min} sec={sec} />
      </View>
      <View style={styles.buttons}>
        <TimerButton
          color={"#0077B6"}
          name={isRunning ? "Pause" : "Start"}
          onPress={startStopWatch}
        />
        <TimerButton name={"Reset"} color={"#ddd"} onPress={resetStopWatch} />
      </View>
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
});
export default StopWatch;
