import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Mood = ({ icon, mood, setMood, isSelected }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setMood(mood);

    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <FontAwesomeIcon
        icon={icon}
        size={20}
        color={isSelected ? "#ffd528" : "grey"}
      />
      <Text>{mood}</Text>
    </TouchableOpacity>
  );
};

export default Mood;
