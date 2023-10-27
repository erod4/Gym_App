import { View, ScrollView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Excercise from "../containers/Excercise";

import WeightDistrib from "../containers/WeightDistrib";
import OptionsSlider from "../containers/OptionsSlider";
import EditExcercise from "../containers/EditExcercise";

import {
  SaveContext,
  useSaveContext,
} from "../store/actions/clientActions/SaveWorkout";
import EndWorkout from "../components/molecules/EndWorkout";
import TimerSlider from "../containers/TimerSlider";
import StartButton from "../containers/StartButton";
import { EditContext } from "../store/actions/clientActions/EditWorkout";
import NewExcercise from "../containers/NewExcercise";

const WorkoutPage = ({ route }) => {
  const [isAddExcercise, setIsAddExcercise] = useState(false);

  const handleAddExcercisePress = () => {
    setIsAddExcercise(true);
  };
  const handleCloseAddExcercisePress = () => {
    setIsAddExcercise(false);
  };
  const { active } = useContext(EditContext);
  const [excerciseId, setExcerciseId] = useState(null);
  const { saveActive } = useContext(SaveContext);
  const { id, name } = route.params;

  useEffect(() => {
    setExcerciseId(id);
  }, [id]);
  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.excercisesScroll}
        style={styles.excercises}
      >
        {active ? (
          <EditExcercise id={"123"} excerciseName={"Incline Bench Press"} />
        ) : (
          <Excercise id={"123"} excerciseName={"Incline Bench Press"} />
        )}
        {isAddExcercise && (
          <NewExcercise onDone={handleCloseAddExcercisePress} />
        )}
      </ScrollView>

      {saveActive && <EndWorkout />}

      <WeightDistrib />
      <OptionsSlider activeId={excerciseId} />
      <TimerSlider />
      <StartButton text={"Add Excercise"} press={handleAddExcercisePress} />
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
