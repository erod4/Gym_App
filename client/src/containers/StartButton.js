import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";

const StartButton = ({ text, press, fontColor, backgroundColor }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: backgroundColor,
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
      color: fontColor,
      textAlign: "center",
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={press}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default StartButton;
