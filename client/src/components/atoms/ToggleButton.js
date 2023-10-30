import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ToggleButton = ({ title, onPress, active }) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: active ? "#0077b6" : "#ddd" },
        ]}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
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
