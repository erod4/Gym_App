import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Excercise from "../containers/Excercise";
import StopWatch from "../containers/StopWatch";
import Swiper from "react-native-swiper";

const WorkoutPage = ({ route }) => {
  const { id, name } = route.params;

  const [setsTimer, setSetsTimer] = useState(0);

  const handlePress = (time) => {
    setSetsTimer(time);
  };

  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.excercisesScroll}
        style={styles.excercises}
      >
        <Excercise excerciseName={"Bench Press"} onPress={handlePress} />
        <Excercise
          excerciseName={"Incline Bench Press"}
          onPress={handlePress}
        />
        <Excercise excerciseName={"Bench Press"} onPress={handlePress} />
      </ScrollView>

      <StopWatch time={setsTimer} />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    width: "100%",

    backgroundColor: "#ddd",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    gap: 10,
  },

  excercisesScroll: {
    gap: 10,
  },
});
export default WorkoutPage;
