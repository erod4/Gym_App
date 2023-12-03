import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const Mood = ({ icon, mood, setMood, isSelected }) => {
  const { isDarkMode } = useContext(AppearenceContext);
  let backgroundColor;
  useEffect(() => {
    backgroundColor = isDarkMode ? "#253341" : "fff";
  }),
    [isDarkMode];
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setMood(mood);

    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "#aaa" : backgroundColor,
        borderRadius: 15,
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{icon}</Text>
    </TouchableOpacity>
  );
};

export default Mood;
