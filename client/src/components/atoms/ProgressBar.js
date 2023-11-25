import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <View style={styles.progressBarBackground}>
      <View style={[styles.progressBar, { width: `${percentage}%` }]} />
    </View>
  );
};
const styles = StyleSheet.create({
  progressBarBackground: {
    width: "100%",
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 10, // Set border radius to achieve rounded edges
    overflow: "hidden", // Clip the content inside the rounded border
  },
  progressBar: {
    height: "100%",
    backgroundColor: "rgb(0, 84, 181)",
    borderRadius: 10,
  },
});
export default ProgressBar;
