import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const StartButton = ({ text, press }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={press}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#0077B6",
    width: "90%",

    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: "100%",

    display: "flex",
    fontWeight: "900",
    fontSize: 20,
    color: "#1c1c1c",
    textAlign: "center",
  },
});
export default StartButton;
