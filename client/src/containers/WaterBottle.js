import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import GenButton from "../components/atoms/GenButton";

const WaterBottle = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const goal = 128;
  const decrementWaterLevel = () => {
    setWaterLevel((prevWaterLevel) => Math.max(0, prevWaterLevel - 8));
  };
  const incrementWaterLevel = () => {
    if (waterLevel < goal) {
      setWaterLevel((prevWaterLevel) => Math.min(prevWaterLevel + 8, goal));
    }
  };
  return (
    <>
      <View style={styles.bottle}>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 5,
            fontWeight: "900",
            fontSize: 15,
            top: "50%",
          }}
        >{`${Math.floor((waterLevel / goal) * 100)} %`}</Text>
        <View style={styles.cap}>
          <View style={styles.capContour} />
        </View>
        <View style={styles.waterContainer}>
          <View
            style={[styles.water, { height: `${(waterLevel / goal) * 100}%` }]}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10, padding: 20 }}>
        <GenButton
          name={"-8 Fl Oz"}
          color={"#0077bf"}
          onPress={decrementWaterLevel}
        />
        <GenButton
          name={"+8 Fl Oz"}
          color={"#0077bf"}
          onPress={incrementWaterLevel}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottle: {
    height: 250,
    width: 75,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "rgba(192, 216, 230, 1)",
    borderWidth: 0.5,
    borderColor: "#0077ff",
    justifyContent: "flex-end",
    flexDirection: "column",
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: "center",
  },
  cap: {
    backgroundColor: "#0077ff",
    position: "absolute",
    top: -20,
    left: 20,
    width: 35,
    height: 23,
    borderRadius: 5,
    zIndex: 2,
  },

  waterContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden", // Prevents overflow
    justifyContent: "flex-end",
    borderTopLeftRadius: 100, // Apply border radius to the top
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  water: {
    width: "100%",
    backgroundColor: "rgba(0, 135, 219,0.5)",

    borderTopWidth: 0.75,
    borderColor: "#0077ff",
  },
});
export default WaterBottle;
