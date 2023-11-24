import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const SwitchBetweenButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.switch} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  switch: {
    backgroundColor: "#0096c7",
    borderRadius: 10,
    padding: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
  },
});
export default SwitchBetweenButton;
