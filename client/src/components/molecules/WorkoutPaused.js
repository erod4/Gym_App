import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";
import { useNavigation } from "@react-navigation/native";
import { get } from "../../../Storage";

const WorkoutPaused = () => {
  const navigation = useNavigation();
  const { isResumeActive, time, ellapseTime, id, isDarkMode } =
    useContext(AppearenceContext);
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    ellapseTime(seconds);
  }, [seconds]);
  const handlePress = () => {
    navigation.navigate("workout-page", { id: id, name: "Push 1", isDarkMode });
  };
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  const t = formatTime(time);
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: isDarkMode ? "#253341" : "#fff",

      shadowColor: "black", // Set the shadow color
      shadowOffset: { width: 0, height: -2 }, // Set the shadow offset to move the shadow upwards (negative height)
      shadowOpacity: 0.2, // Set the shadow opacity
      shadowRadius: 2, // Set the shadow radius
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 10,
    },
    text: {
      width: "100%",
      textAlign: "center",
      fontWeight: "700",
      fontSize: 15,
      paddingTop: 5,
      color: isDarkMode ? "#ddd" : "#000",
    },
    ellapsedTime: {
      width: "100%",
      textAlign: "center",
      fontWeight: "500",
      fontSize: 12,
      color: isDarkMode ? "#fff" : "#555",
    },
  });
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View
        style={{
          backgroundColor: "#aaa",
          paddingVertical: 3,
          width: 40,
          borderRadius: 10,
        }}
      />
      <Text style={styles.text}>Push 1</Text>
      <Text style={styles.ellapsedTime}>{t}</Text>
    </Pressable>
  );
};

export default WorkoutPaused;
