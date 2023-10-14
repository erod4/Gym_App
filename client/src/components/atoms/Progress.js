import React from "react";
import { View, StyleSheet } from "react-native";
import { Circle, G, Svg } from "react-native-svg";
const Progress = ({ percentage, radius, strokeWidth, color, bgColor }) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;
  const adjustedRadius = radius - strokeWidth / 2;

  return (
    <View style={styles.container}>
      <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
        <G transform={{ translate: `${strokeWidth / 2}, ${strokeWidth / 2}` }}>
          <Circle
            r={radius}
            cx={radius}
            cy={radius}
            stroke={bgColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <Circle
            r={radius}
            cx={radius}
            cy={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${circumference}, ${circumference}`}
            strokeDashoffset={strokeDashoffset}
          />
        </G>
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Progress;
