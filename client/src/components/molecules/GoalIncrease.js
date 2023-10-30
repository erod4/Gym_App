import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ProgressBar from "../atoms/ProgressBar";

const GoalIncrease = ({
  date,
  change,
  units,
  icon,
  name,
  count,
  percentage,
}) => {
  return (
    <View style={styles.goalContainer}>
      <View style={styles.left}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.units}>{units}</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.changeContainer}>
          <FontAwesomeIcon
            icon={change > 0 ? "fa-arrow-up" : "fa-arrow-down"}
            color="#0077b6"
            style={styles.changeIcon}
          />
          <Text style={styles.change}>
            {change}
            {units}
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <FontAwesomeIcon
            icon={icon}
            size={12}
            color="#777"
            style={styles.changeIcon}
          />
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 2,
  },

  right: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 0,
  },
  changeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  change: {
    fontWeight: "700",
    fontSize: 18,
    color: "#0077b6",
  },
  changeIcon: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  date: {
    fontWeight: "700",
    fontSize: 15,
    color: "#777",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  count: {
    fontSize: 35,
    fontWeight: "700",
  },
  units: {
    fontSize: 20,
  },
});
export default GoalIncrease;
