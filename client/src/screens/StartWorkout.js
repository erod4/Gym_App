import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Workout from "../components/atoms/Workout";

const StartWorkout = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Workout
          linkTo={"workout-page"}
          id={"123"}
          time={60}
          day={"Monday"}
          title={"Push1"}
        />
        <Workout
          linkTo={"workout-page"}
          id={"13edd"}
          time={60}
          day={"Monday"}
          title={"Push1"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    width: "90%",
    gap: 10,
  },
});
export default StartWorkout;
