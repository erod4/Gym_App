import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const Setting = ({ name }) => {
  return (
    <TouchableOpacity style={styles.statistic}>
      <Text style={styles.text}>{name}</Text>
      <FontAwesomeIcon style={{ color: "#1c1c1c" }} icon={"fa-angle-right"} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  statistic: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
  },
});
export default Setting;
