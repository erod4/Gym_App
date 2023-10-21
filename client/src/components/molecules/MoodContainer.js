import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import Mood from "../atoms/Mood";
const MoodContainer = () => {
  const moods = ["happy", "sad", "angry", "meh"];
  const [mood, setMood] = useState(null);
  const [isFaceSet, setIsFaceSet] = useState(false);
  const handlePress = (mood) => {
    setMood(mood);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select mood during workout</Text>

      <View style={styles.intensity}>
        <Mood
          icon={"fa-face-smile"}
          mood={moods[0]}
          setMood={handlePress}
          isSelected={mood == moods[0]}
        />
        <Mood
          icon={"fa-face-sad-tear"}
          mood={moods[1]}
          setMood={handlePress}
          isSelected={mood == moods[1]}
        />
        <Mood
          icon={"fa-face-angry"}
          mood={moods[2]}
          setMood={handlePress}
          isSelected={mood == moods[2]}
        />
        <Mood
          icon={"fa-face-meh"}
          mood={moods[3]}
          setMood={handlePress}
          isSelected={mood === moods[3]}
        />
      </View>
    </View>
  );
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
  },
  intensity: {
    flexDirection: "row",
    gap: 10,
  },
});
export default MoodContainer;
