import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

import {
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";

import StopWatch from "./StopWatch";
import { useTimerSliderContext } from "../store/actions/clientActions/TimerSlider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useSettingsSliderContext } from "../store/actions/clientActions/SettingsSlider";

const TimerSlider = ({ activeId }) => {
  const { isTimerSliderActive, closeTimerSlider } = useTimerSliderContext();

  const screenHeight = Dimensions.get("window").height;
  const slideUpValue = new Animated.Value(0);
  useEffect(() => {
    if (isTimerSliderActive) {
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
  }, [isTimerSliderActive, slideUpValue]);
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
        paddingTop: 5,
        height: screenHeight / 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
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
      <StopWatch />
      <View style={styles.exit}>
        <TouchableOpacity style={styles.panelHandle} onPress={closeTimerSlider}>
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
    position: "absolute",
    top: 0,
    right: 0,
  },

  panelHandle: {
    padding: 20,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});
export default TimerSlider;
