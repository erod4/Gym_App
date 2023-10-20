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
import OptionsSlider from "../containers/OptionsSlider";

const WorkoutPage = ({ route }) => {
  const { id, name } = route.params;

  const [setsTimer, setSetsTimer] = useState(0);
  const [setsWeight, setSetsWeight] = useState();
  const [excerciseId, setExcerciseId] = useState(null);
  const [isPanelDisVisible, setIsDisPanelVisible] = useState(false);
  const [isPanelOptionsVisible, setIsOptionsPanelVisible] = useState(false);
  const handleTimerPress = (time) => {
    setSetsTimer(time);
  };
  const handleWeightPress = (weight) => {
    setSetsWeight(weight);
    setIsOptionsPanelVisible(false);
    setIsDisPanelVisible(true);
  };
  const closeDisPanel = () => {
    setSetsWeight(0);
    setIsDisPanelVisible(false);
  };
  const handleOptionsPress = (id) => {
    setIsOptionsPanelVisible(true);
    setIsDisPanelVisible(false);
    setExcerciseId(id);
  };
  const closeOptionsPanel = () => {
    setIsOptionsPanelVisible(false);
    setExcerciseId(null);
  };

  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.excercisesScroll}
        style={styles.excercises}
      >
        <Excercise
          id={"123"}
          excerciseName={"Bench Press"}
          onPress={[handleTimerPress, handleWeightPress, handleOptionsPress]}
        />
        <Excercise
          id={"123"}
          excerciseName={"Incline Bench Press"}
          onPress={[handleTimerPress, handleWeightPress, handleOptionsPress]}
        />
        <Excercise
          id={"123"}
          excerciseName={"Bench Press"}
          onPress={[handleTimerPress, handleWeightPress, handleOptionsPress]}
        />
      </ScrollView>

      <StopWatch time={setsTimer} />
      <WeightDistrib
        weight={setsWeight}
        isVisible={isPanelDisVisible}
        onClose={closeDisPanel}
      />
      <OptionsSlider
        onClose={closeOptionsPanel}
        isVisible={isPanelOptionsVisible}
        activeId={excerciseId}
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
