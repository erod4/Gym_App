import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StartButton from "../containers/StartButton";
import Workouts from "../containers/Workouts";

const Routines = () => {
  return (
    <View style={styles.container}>
      <Workouts />
      <StartButton text={"Add Workout"} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    paddingTop: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    backgroundColor: "#ddd",
    gap: 10,
  },
});
export default Routines;
