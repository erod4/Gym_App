import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CountUp = ({ min, sec }) => {
  return (
    <View style={styles.count}>
      <Text style={styles.time}>{min}</Text>
      <Text style={styles.time}>:</Text>
      <Text style={styles.time}>{sec}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  count: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",

    padding: 5,
  },
  time: {
    textAlign: "center",
    color: "#000",
    fontSize: 50,
    fontWeight: "500",
  },
});
export default CountUp;
