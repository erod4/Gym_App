import { View, Text, Button } from "react-native";
import React, { useContext, useEffect, useMemo, useState } from "react";

import {
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
useMemo;
import { RatingSliderContext } from "../store/actions/clientActions/RatingSlider";
import WaterBottle from "./WaterBottle";
import GenButton from "../components/atoms/GenButton";
const WaterSlider = () => {
  const waterGoal = 16;
  const slideUpValue = new Animated.Value(0);
  const { isWaterSliderActive, closeWaterSlider } =
    useContext(RatingSliderContext);
  useEffect(() => {
    if (isWaterSliderActive) {
      Animated.timing(slideUpValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideUpValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isWaterSliderActive, slideUpValue]);

  const screenHeight = Dimensions.get("window").height;

  const slideUpAnimation = slideUpValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0 - screenHeight / 2, 0],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",

        bottom: slideUpAnimation,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        height: screenHeight / 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -2, // This creates the shadow at the top
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android
        zIndex: 5,
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: "600" }}>Log Your Water</Text>
      <View style={styles.setting}>
        <WaterBottle />
      </View>
      <View style={styles.exit}>
        <TouchableOpacity style={styles.panelHandle} onPress={closeWaterSlider}>
          <FontAwesomeIcon
            size={25}
            icon={"fa-xmark"}
            style={{ color: "#1c1c1c" }}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  exit: {
    width: "100%",
    alignItems: "flex-end",

    position: "absolute",
    top: 0,
  },
  setting: {
    paddingTop: 40,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  panelHandle: {
    padding: 20,
  },
});
export default WaterSlider;
