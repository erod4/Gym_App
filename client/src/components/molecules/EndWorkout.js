import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import GenButton from "../atoms/GenButton";
import {
  SaveContext,
  useSaveContext,
} from "../../store/actions/clientActions/SaveWorkout";
import { useNavigation } from "@react-navigation/native";
import { RatingSliderContext } from "../../store/actions/clientActions/RatingSlider";

const EndWorkout = () => {
  // const { openRating } = useContext(RatingSliderContext);
  const navigation = useNavigation();
  const { stopSaving } = useContext(SaveContext);
  const { openRating } = useContext(RatingSliderContext);
  const handleEndWorkout = () => {
    navigation.navigate("nav");
    stopSaving();
    openRating();
  };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.text}>End Workout?</Text>
        <View style={styles.buttonContainer}>
          <GenButton name={"Resume"} color={"#0077b6"} onPress={stopSaving} />
          <GenButton
            name={"Pause Workout"}
            color={"#999"}
            onPress={stopSaving}
          />
          <GenButton
            name={"End Workout"}
            color={"red"}
            onPress={handleEndWorkout}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    position: "relative",
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  container: {
    backgroundColor: "#fff",

    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 5,
  },
  buttonContainer: {
    flexDirection: "column",
    width: "100%",

    gap: 10,
  },
});
export default EndWorkout;
