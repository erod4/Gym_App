import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Workout from "../components/atoms/Workout";
import StartButton from "../containers/StartButton";
import { get, save } from "../../Storage";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const StartWorkout = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    page: {
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
      paddingBottom: 40,
      backgroundColor: isDarkMode ? "#192734" : "#fff",
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

      <StartButton
        text={"Add Workout"}
        backgroundColor={"#0096c7"}
        fontColor={"#fff"}
      />
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
    backgroundColor: "#fff",
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
