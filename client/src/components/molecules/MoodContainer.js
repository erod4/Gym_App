import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import Slider from "@react-native-community/slider";
import Mood from "../atoms/Mood";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";
const MoodContainer = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const moods = ["happy", "sad", "angry", "meh"];
  const [mood, setMood] = useState("happy");

  const handlePress = (mood) => {
    setMood(mood);
  };
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 15,
      fontWeight: "700",
      padding: 10,
      color: isDarkMode ? "#fff" : "#000",
    },
    intensity: {
      flexDirection: "row",
      gap: 15,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select mood during workout</Text>

      <View style={styles.intensity}>
        <Mood
          icon={"😀"}
          setMood={handlePress}
          isSelected={mood == moods[0]}
          mood={"happy"}
        />
        <Mood
          icon={"😢"}
          setMood={handlePress}
          isSelected={mood == moods[1]}
          mood={"sad"}
        />
        <Mood
          icon={"😡"}
          setMood={handlePress}
          isSelected={mood == moods[2]}
          mood={"angry"}
        />
        <Mood
          icon={"🫤"}
          setMood={handlePress}
          isSelected={mood === moods[3]}
          mood={"meh"}
        />
      </View>
    </View>
  );
};

export default MoodContainer;
