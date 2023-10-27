import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ToggleButton = ({ title, onPress }) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0077b6",
    padding: 5,
    width: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
  },
});
export default ToggleButton;
