import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

import {
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ExcerSetting from "../components/atoms/ExcerSetting";
const OptionsSlider = ({ onClose, isVisible, activeId }) => {
  const screenHeight = Dimensions.get("window").height;
  const slideUpValue = new Animated.Value(0);
  useEffect(() => {
    if (isVisible) {
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
      }).start(() => {
        onClose();
      });
    }
  }, [isVisible, onClose, slideUpValue]);
  const slideUpAnimation = slideUpValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0 - screenHeight / 2, 0],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: slideUpAnimation,
        borderRadius: 15,
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
      }}
    >
      <View style={styles.setting}>
        <ExcerSetting icon={"fa-circle-check"} name={"Mark Complete"} />
        <ExcerSetting icon={"fa-pen-to-square"} name={"Edit"} />

        <ExcerSetting icon={"fa-trash-can"} name={"Delete"} />
      </View>
      <View style={styles.exit}>
        <TouchableOpacity style={styles.panelHandle} onPress={onClose}>
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
    padding: 10,
    position: "absolute",
    top: 0,
  },
  setting: {
    paddingTop: 40,
    width: "100%",
    flex: 1,
  },
});
export default OptionsSlider;
