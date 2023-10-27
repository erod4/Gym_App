import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import GenButton from "../components/atoms/GenButton";

const NewExcercise = ({ onDone }) => {
  return (
    <View style={styles.excercise}>
      <View style={styles.excerciseNameContainer}>
        <TextInput style={styles.excerciseName} placeholder="Excercise Name" />
      </View>
      <View style={styles.buttonContainer}>
        <GenButton name={"Add"} color={"#0077B6"} onPress={onDone} />
        <GenButton name={"Cancel"} color={"#ddd"} onPress={onDone} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  excercise: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  excerciseNameContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
  },
  excerciseName: {
    fontWeight: "900",
    fontSize: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    flex: 1,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
export default NewExcercise;
