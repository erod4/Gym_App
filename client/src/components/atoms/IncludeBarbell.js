import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const IncludeBarbell = ({ handleBarbellSelection }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed); // Toggle the pressed state
    handleBarbellSelection();
  };
  const buttonColor = isPressed ? "#ddd" : "rgba(0, 150, 199, 0.25)";
  return (
    <TouchableOpacity
      style={[styles.weight, { backgroundColor: buttonColor }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      {isPressed && (
        <Text style={{ color: "#0096c7", fontWeight: "700" }}>No</Text>
      )}
      {!isPressed && (
        <Text style={{ color: "#0096c7", fontWeight: "700" }}>Yes</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  weight: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
export default IncludeBarbell;
