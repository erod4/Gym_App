import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const WeightSelection = ({ weight, handleWeightSelected }) => {
  const [isPressed, setIsPressed] = useState(true);
  const handlePress = () => {
    setIsPressed(!isPressed); // Toggle the pressed state

    handleWeightSelected(weight);
  };
  const buttonColor = isPressed ? "rgba(0, 150, 199, 0.25)" : "#555";
  return (
    <TouchableOpacity
      style={[styles.weight, { backgroundColor: buttonColor }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text
        style={{ textAlign: "center", color: "#0096c7", fontWeight: "700" }}
      >
        {weight}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  weight: {
    paddingVertical: 10,
    width: 35,
    backgroundColor: "#0077B6",
    borderRadius: 10,
    justifyContent: "center",
  },
});
export default WeightSelection;
