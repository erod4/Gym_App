import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const NutritionDailyProgress = ({ name, currVal, goalValue, units }) => {
  const { isDarkMode } = useContext(AppearenceContext);
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
    name: {
      fontWeight: "700",
      fontSize: 15,
      color: isDarkMode ? "#ddd" : "#000",
    },
    data: {
      fontSize: 15,
      color: isDarkMode ? "#ddd" : "#000",
    },
    rightContainer: {},
    percent: { fontSize: 15, color: isDarkMode ? "#ddd" : "#000" },

    bottomContainer: {
      width: "100%",
      backgroundColor: "#ddd",
      height: 12,
      borderRadius: 10,
      overflow: "hidden", // Clip the content inside the rounded border
    },
    progressBar: {
      height: "100%",
      backgroundColor: "#rgb(0, 84, 181)",
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
