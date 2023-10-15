import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Set from "../components/atoms/Set";

const Excercise = ({ excerciseName }) => {
  return (
    <View style={styles.excercise}>
      <View style={styles.excerciseNameContainer}>
        <Text style={styles.excerciseName}>{excerciseName}</Text>
      </View>
      <Set setName={"Set 1"} />
      <Set setName={"Set 2"} />
      <Set setName={"Set 3"} />
    </View>
  );
};
const styles = StyleSheet.create({
  excercise: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  excerciseNameContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  excerciseName: {
    fontWeight: "900",
    fontSize: 20,
  },
});
export default Excercise;
