import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";

const GenButton = ({ name, onPress, color }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: color,
          borderRadius: 10,
          padding: 10,
          paddingTop: 15,
          paddingBottom: 15,
          width: 100,
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

export default GenButton;