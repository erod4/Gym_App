import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const IncludeBarbell = ({ handleBarbellSelection }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed); // Toggle the pressed state
    handleBarbellSelection();
  };
  const buttonColor = isPressed ? "#0077B6" : "grey";
  return (
    <TouchableOpacity
      style={[styles.weight, { backgroundColor: buttonColor }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      {isPressed && <Text>Yes</Text>}
      {!isPressed && <Text>No</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  weight: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0077B6",
    borderRadius: 10,
  },
});
export default IncludeBarbell;
