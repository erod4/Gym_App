import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Excercise from "../containers/Excercise";
import StopWatch from "../containers/StopWatch";
import Swiper from "react-native-swiper";
import WeightDistrib from "../containers/WeightDistrib";

const WorkoutPage = ({ route }) => {
  const { id, name } = route.params;

  const [setsTimer, setSetsTimer] = useState(0);
  const [setsWeight, setSetsWeight] = useState();
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const handleTimerPress = (time) => {
    setSetsTimer(time);
  };
  const handleWeightPress = (weight) => {
    setSetsWeight(weight);

    setIsPanelVisible(true);
  };
  const closePanel = () => {
    setSetsWeight(0);
    setIsPanelVisible(false);
  };

  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.excercisesScroll}
        style={styles.excercises}
      >
        <Excercise
          excerciseName={"Bench Press"}
          onPress={[handleTimerPress, handleWeightPress]}
        />
        <Excercise
          excerciseName={"Incline Bench Press"}
          onPress={handleTimerPress}
        />
        <Excercise
          excerciseName={"Bench Press"}
          onPress={[handleTimerPress, handleWeightPress]}
        />
      </ScrollView>

      <StopWatch time={setsTimer} />
      <WeightDistrib
        weight={setsWeight}
        isVisible={isPanelVisible}
        onClose={closePanel}
      />
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
