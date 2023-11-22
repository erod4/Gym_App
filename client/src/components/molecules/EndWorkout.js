import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import GenButton from "../atoms/GenButton";
import {
  SaveContext,
  useSaveContext,
} from "../../store/actions/clientActions/SaveWorkout";
import { useNavigation } from "@react-navigation/native";
import { RatingSliderContext } from "../../store/actions/clientActions/RatingSlider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppearenceContext } from "../../store/Appearence";

const EndWorkout = ({ id }) => {
  // const { openRating } = useContext(RatingSliderContext);
  const navigation = useNavigation();
  const { stopSaving } = useContext(SaveContext);
  const { openRating } = useContext(RatingSliderContext);
  const { setResume, setId, ellapseTime } = useContext(AppearenceContext);
  const handleEndWorkout = () => {
    navigation.navigate("nav");
    ellapseTime(0);
    setResume(false);
    stopSaving();
    openRating();
  };
  const pauseWorkout = () => {
    setId(id);
    navigation.navigate("nav");
    setResume(true);
    stopSaving();
  };
  return (
    <Pressable style={styles.page} onPress={stopSaving}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>End Workout?</Text>
        </View>

        <View style={styles.butonContainer}>
          <View>
            <Pressable onPress={stopSaving} style={styles.button}>
              <Text style={styles.buttonText}>Resume</Text>
            </Pressable>
          </View>
          <View>
            <Pressable onPress={pauseWorkout} style={styles.button}>
              <Text style={styles.buttonText}>Pause Workout</Text>
            </Pressable>
          </View>
          <View>
            <Pressable onPress={handleEndWorkout} style={styles.button}>
              <Text style={styles.buttonText}>End Workout</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
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

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingVertical: 15,
  },
  text: { fontWeight: "700", fontSize: 17 },
  butonContainer: {
    width: "100%",
  },
  button: {
    borderTopWidth: 0.5,
    borderColor: "#555",
    width: "100%",
    padding: 15,
    paddingHorizontal: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    width: "100%",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
  },
});
export default EndWorkout;
