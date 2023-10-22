import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TimerButton = ({ name, onPress, color }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: color,
          borderRadius: 10,
          padding: 25,
          paddingLeft: 30,
          paddingRight: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "900",
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default TimerButton;
