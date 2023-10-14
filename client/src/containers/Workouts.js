import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Workout from "../components/atoms/Workout";

const Workouts = () => {
  return (
    <ScrollView style={styles.workouts} contentContainerStyle={styles.content}>
      <Workout time={"60"} title={"Push 1"} day={"Monday"} />
      <Workout time={"60"} title={"Pull 1"} day={"Tuesday"} />
      <Workout time={"60"} title={"Push 2"} day={"Thursday"} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  workouts: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#ddd",
    paddingTop: 10,
    paddingBottom: 10,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
export default Workouts;
