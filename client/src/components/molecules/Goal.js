import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ProgressBar from "../atoms/ProgressBar";

const Goal = ({ icon, name, count, units, percentage }) => {
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
          <Text style={styles.unitCount}>{count}</Text>
          <Text style={styles.units}>{units}</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.percentage}>{percentage}%</Text>

        <ProgressBar percentage={percentage} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "50%",
    gap: 20,
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: "50%",
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
export default Goal;
