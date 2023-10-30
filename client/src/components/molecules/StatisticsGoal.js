import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ProgressBar from "../atoms/ProgressBar";
import { useNavigation } from "@react-navigation/native";

const StatisticsGoal = ({ name, icon, target, currData, units, start }) => {
  return (
    <View style={styles.goalContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.iconLabelContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon style={{ color: "#0077B6" }} icon={icon} />
          </View>
          <Text style={styles.iconName}>{name}</Text>
        </View>
        <View style={styles.unitContainer}>
          <Text style={styles.unitCount}>{currData}</Text>
          <Text style={styles.units}>{units}</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.percentage}>
          {Math.min(
            Math.floor(((currData - start) / (target - start)) * 100),
            100
          )}
          %
        </Text>

        <ProgressBar
          percentage={((currData - start) / (target - start)) * 100}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 20,
    width: "50%",
    gap: 10,
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: 100,
    backgroundColor: "#ddd",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLabelContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconName: {
    fontSize: 15,
    fontWeight: "900",
  },
  unitContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  unitCount: {
    fontSize: 20,
    fontWeight: "900",
  },
  units: {
    fontSize: 10,
    fontWeight: "900",
  },
  lowerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  percentage: {
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "900",
    width: "100%",
  },
});
export default StatisticsGoal;
