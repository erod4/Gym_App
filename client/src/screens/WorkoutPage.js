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
import FormButton from "../components/atoms/formButton";
import WeightDistrib from "../containers/WeightDistrib";
import OptionsSlider from "../containers/OptionsSlider";
import EditExcercise from "../containers/EditExcercise";
import { useEditContext } from "../store/actions/clientActions/EditWorkout";
import { useSaveContext } from "../store/actions/clientActions/SaveWorkout";
import EndWorkout from "../components/molecules/EndWorkout";
import TimerSlider from "../containers/TimerSlider";
import StartButton from "../containers/StartButton";

const WorkoutPage = ({ route }) => {
  const { isSaveMode } = useSaveContext();
  const { id, name } = route.params;
  const { isEditMode } = useEditContext();

  const [excerciseId, setExcerciseId] = useState(null);

  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.excercisesScroll}
        style={styles.excercises}
      >
        {isEditMode ? (
          <EditExcercise id={"123"} excerciseName={"Incline Bench Press"} />
        ) : (
          <Excercise id={"123"} excerciseName={"Incline Bench Press"} />
        )}
      </ScrollView>

      {isSaveMode && <EndWorkout />}

      <WeightDistrib />
      <OptionsSlider activeId={excerciseId} />
      <TimerSlider />
      <StartButton text={"Add Excercise"} />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    width: "100%",
    flex: 1,
    backgroundColor: "#ddd",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 30,
    gap: 10,
  },

  excercisesScroll: {
    gap: 10,
  },
});
export default WorkoutPage;
