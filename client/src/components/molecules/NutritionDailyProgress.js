import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NutritionDailyProgress = ({ name, currVal, goalValue, units }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "column",
      paddingHorizontal: 10,
      paddingVertical: 2,
    },
    upperContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    leftContainer: {
      flexDirection: "row",
    },
    name: { fontWeight: "700", fontSize: 15 },
    data: {
      fontSize: 15,
    },
    rightContainer: {},
    percent: { fontSize: 15 },

    bottomContainer: {
      width: "100%",
      backgroundColor: "#ddd",
      height: 12,
      borderRadius: 10,
      overflow: "hidden", // Clip the content inside the rounded border
    },
    progressBar: {
      height: "100%",
      backgroundColor: "#0096c7",
      borderRadius: 10,
      width: `${(currVal / goalValue) * 100}%`,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.data}>
            {" "}
            -{currVal} / {goalValue} {units}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.percent}>
            {((currVal / goalValue) * 100).toFixed(1)} %
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.progressBar} />
      </View>
    </View>
  );
};

export default NutritionDailyProgress;
