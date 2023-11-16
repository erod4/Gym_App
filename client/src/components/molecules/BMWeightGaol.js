import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ProgressCircle } from "react-native-svg-charts";

const BMWeightGaol = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weight Goal</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressCircle
          style={{
            width: "100%",
            height: 180,
          }}
          progress={0.9}
          progressColor={"rgb(134, 65, 244)"}
          startAngle={-Math.PI * 0.5}
          endAngle={Math.PI * 0.5}
          strokeWidth={10}
          cornerRadius={10}
        />
        <View style={styles.progressData}>
          <Text style={styles.progressDataText}>190 / 210</Text>
          <Text style={styles.progressDataUnits}>Lb</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  titleContainer: {
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
  },
  title: { textAlign: "center", fontWeight: "700", fontSize: 15 },
  progressContainer: { justifyContent: "center" },
  progressData: {
    position: "absolute",
    top: 40,
    right: 135,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  progressDataText: {
    fontWeight: "600",
    fontSize: 18,
  },
  progressDataUnits: {
    fontWeight: "600",
    fontSize: 14,
  },
});
export default BMWeightGaol;
