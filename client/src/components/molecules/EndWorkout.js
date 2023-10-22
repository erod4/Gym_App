import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GenButton from "../atoms/GenButton";
import { useSaveContext } from "../../store/actions/clientActions/SaveWorkout";
import { useNavigation } from "@react-navigation/native";
import { useRatingSliderContext } from "../../store/actions/clientActions/RatingSlider";

const EndWorkout = () => {
  const { openRatingSlider } = useRatingSliderContext();
  const navigation = useNavigation();
  const { stopSaving } = useSaveContext();
  const handleEndWorkout = () => {
    navigation.navigate("nav");
    stopSaving();
    openRatingSlider();
  };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.text}>Do you wish to end your workout?</Text>
        <View style={styles.buttonContainer}>
          <GenButton name={"Pause"} color={"#0077B6"} onPress={stopSaving} />
          <GenButton
            name={"End"}
            color={"#0077B6"}
            onPress={handleEndWorkout}
          />
          <GenButton name={"Cancel"} color={"#ddd"} onPress={stopSaving} />
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
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 5,
  },
});
export default EndWorkout;
