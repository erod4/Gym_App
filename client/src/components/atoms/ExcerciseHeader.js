import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ExcerciseHeader = ({ route }) => {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "700",
        color: route.params.isDarkMode ? "#ddd" : "#000",
      }}
    >
      {route?.params?.name}
    </Text>
  );
};

export default ExcerciseHeader;
