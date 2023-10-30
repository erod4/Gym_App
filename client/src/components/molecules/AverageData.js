import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ProgressBar from "../atoms/ProgressBar";
import { useNavigation } from "@react-navigation/native";

const AverageData = ({ data, dataFor, units }) => {
  let total = 0;
  data.forEach((item) => {
    total += item;
  });

  const avg = (total / data.length).toFixed(1);
  return (
    <View style={styles.goalContainer}>
      <View style={styles.lowerContainer}>
        <Text style={styles.dataFor}>Average {dataFor}</Text>
      </View>
      <View style={styles.upperContainer}>
        <Text style={styles.avg}>
          {avg} {units}
        </Text>
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

    justifyContent: "center",
    alignItems: "center",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },

  avg: {
    fontSize: 20,
    fontWeight: "700",
  },

  lowerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: "100%",
  },
  dataFor: {
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "900",
    width: "100%",
  },
});
export default AverageData;
