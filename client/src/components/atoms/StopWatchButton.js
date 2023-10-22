import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";

const StopWatchButton = ({ name, onPress, color }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: color,
          borderRadius: 10,
          padding: 25,
          paddingLeft: 35,
          paddingRight: 35,
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

export default StopWatchButton;
