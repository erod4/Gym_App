import { View, ScrollView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Excercise from "../containers/Excercise";
import { trigger } from "react-native-haptic-feedback";
import WeightDistrib from "../containers/WeightDistrib";
import OptionsSlider from "../containers/OptionsSlider";
import EditExcercise from "../containers/EditExcercise";
import AddSet from "../components/atoms/AddSet";
import { SaveContext } from "../store/actions/clientActions/SaveWorkout";
import EndWorkout from "../components/molecules/EndWorkout";
import TimerSlider from "../containers/TimerSlider";
import StartButton from "../containers/StartButton";
import { EditContext } from "../store/actions/clientActions/EditWorkout";
import NewExcercise from "../containers/NewExcercise";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";
import { InteractionContext } from "../store/actions/clientActions/Interaction";

const WorkoutPage = ({ route }) => {
  const { stopSaving, saveActive } = useContext(SaveContext);
  const { ellapseTime, time } = useContext(AppearenceContext);
  const { activeInteraction, setActive, display } =
    useContext(InteractionContext);
  const [isAddExcercise, setIsAddExcercise] = useState(false);
  const [seconds, setSeconds] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (saveActive || display == "flex") {
      setIsAddExcercise(false);
    }
  }, [saveActive, display]);
  useEffect(() => {
    ellapseTime(seconds);
  }, [seconds]);
  const handleAddExcercisePress = () => {
    trigger("notificationSuccess");
    setIsAddExcercise(true);
    setActive("");
    stopSaving();
  };
  const handleCloseAddExcercisePress = () => {
    trigger("notificationSuccess");
    setIsAddExcercise(false);
  };
  const { active } = useContext(EditContext);
  const [excerciseId, setExcerciseId] = useState(null);
  const { id, name } = route.params;

  useEffect(() => {
    setExcerciseId(id);
  }, [id]);
  const styles = StyleSheet.create({
    page: {
      width: "100%",
      flex: 1,
      backgroundColor: route.params.isDarkMode ? "#192734" : "#fff",
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
      </ScrollView>
      {saveActive && <EndWorkout id={id} />}
      {activeInteraction == "WEIGHT" && <WeightDistrib />}
      {activeInteraction == "OPTIONS" && (
        <OptionsSlider activeId={excerciseId} />
      )}
      <TimerSlider />
      <StartButton
        text={"Add Excercise"}
        press={handleAddExcercisePress}
        fontColor={"#fff"}
        backgroundColor={"#0096c7"}
      />
      {isAddExcercise && <NewExcercise onDone={handleCloseAddExcercisePress} />}
      {activeInteraction == "ADD_SET" && (
        <AddSet
          closeNewSet={() => {
            setActive("");
          }}
          setName={"Set 4"}
        />
      )}
    </View>
  );
};

export default WorkoutPage;
