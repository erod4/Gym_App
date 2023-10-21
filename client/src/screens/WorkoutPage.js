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

import WeightDistrib from "../containers/WeightDistrib";
import OptionsSlider from "../containers/OptionsSlider";
import EditExcercise from "../containers/EditExcercise";
import { useEditContext } from "../store/actions/clientActions/EditWorkout";
import { useSaveContext } from "../store/actions/clientActions/SaveWorkout";
import EndWorkout from "../components/molecules/EndWorkout";

const WorkoutPage = ({ route }) => {
  const { isSaveMode } = useSaveContext();
  const { id, name } = route.params;
  const { isEditMode } = useEditContext();

  const [setsTimer, setSetsTimer] = useState(0);
  const [setsWeight, setSetsWeight] = useState();
  const [excerciseId, setExcerciseId] = useState(null);
  const [isPanelDisVisible, setIsDisPanelVisible] = useState(false);

  const handleTimerPress = (time) => {
    setSetsTimer(time);
  };
  const handleWeightPress = (weight) => {
    setSetsWeight(weight);

    setIsDisPanelVisible(true);
  };

  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.excercisesScroll}
        style={styles.excercises}
      >
        {isEditMode ? (
          <EditExcercise id={"123"} excerciseName={"Incline Bench Press"} />
        ) : (
          <Excercise
            id={"123"}
            excerciseName={"Incline Bench Press"}
            onPress={handleTimerPress}
          />
        )}
      </ScrollView>
      {isSaveMode && <EndWorkout />}
      <StopWatch time={setsTimer} />
      <WeightDistrib />
      <OptionsSlider activeId={excerciseId} />
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
    paddingBottom: 20,
    gap: 10,
  },

  excercisesScroll: {
    gap: 10,
  },
});
export default WorkoutPage;
