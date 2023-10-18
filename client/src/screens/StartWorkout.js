import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Workout from "../components/atoms/Workout";
import StartButton from "../containers/StartButton";

const StartWorkout = () => {
  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        style={styles.container}
      >
        <Workout
          linkTo={"workout-page"}
          id={"123"}
          name={"push 1"}
          time={60}
          day={"Monday"}
          title={"Push 1"}
        />
        <Workout
          linkTo={"workout-page"}
          id={"13edd"}
          time={60}
          name={"hello"}
          day={"Monday"}
          title={"Push 1"}
        />
      </ScrollView>

      <StartButton text={"Add Workout"} />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingBottom: 40,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    width: "90%",
  },
  scroll: {
    gap: 10,
  },
});
export default StartWorkout;
