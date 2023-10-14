import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Circle, G, Svg, Text as SVGText } from "react-native-svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Progress = ({
  percentage,

  strokeWidth,
  color,
  bgColor,
  innerColor,
  innerText,
  innerIcon,
  innerData,
  innerTextColor,
}) => {
  const radius = Dimensions.get("window").width * 0.11;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <View style={styles.container}>
      <Svg
        width={radius * 2 + strokeWidth + 5}
        height={radius * 2 + strokeWidth + 5}
      >
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
          {innerText && (
            <>
              <Circle r={radius} cx={radius} cy={radius} fill={innerColor} />
              <SVGText
                x={radius}
                y={radius - 15}
                textAnchor="middle"
                fontSize="14" // Adjust the font size as needed
                fill={innerTextColor || "#111"} // Default text color is white
              >
                {innerText}
              </SVGText>

              <View style={styles.view}>
                <FontAwesomeIcon
                  style={{ color: innerTextColor, marginRight: 10 }}
                  icon={innerIcon}
                />
                <Text style={{ color: innerTextColor, fontWeight: "900" }}>
                  {innerData}
                </Text>
              </View>
            </>
          )}
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
  view: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    top: "50%",
  },
});
export default Progress;
