import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";

const GenButton = ({
  name,
  onPress,
  color,
  buttonWidth,
  horizontalPadding,
  fontColor,
}) => {
  const handlePress = () => {
    onPress();
  };
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: color,
          borderRadius: 10,
          paddingHorizontal: horizontalPadding ? horizontalPadding : 100,
          paddingVertical: 10,
          width: buttonWidth && buttonWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handlePress}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "900",
            color: fontColor,
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default GenButton;
