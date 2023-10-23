import { View, Text, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import {
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ExcerSetting from "../components/atoms/ExcerSetting";
import { EditContext } from "../store/actions/clientActions/EditWorkout";

import { SettingsSliderContext } from "../store/actions/clientActions/SettingsSlider";
const OptionsSlider = ({ activeId }) => {
  const { openEdit } = useContext(EditContext);
  const slideUpValue = new Animated.Value(0);
  const { isSettingsSliderActive, closeSettingsSlider } = useContext(
    SettingsSliderContext
  );
  useEffect(() => {
    if (isSettingsSliderActive) {
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
  }, [isSettingsSliderActive, slideUpValue]);

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
        zIndex: 5,
      }}
    >
      <View style={styles.setting}>
        <ExcerSetting
          icon={"fa-pen-to-square"}
          name={"Edit"}
          onPress={openEdit}
        />

        <ExcerSetting icon={"fa-trash-can"} name={"Delete"} />
      </View>
      <View style={styles.exit}>
        <TouchableOpacity
          style={styles.panelHandle}
          onPress={closeSettingsSlider}
        >
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
    flex: 1,
  },
  panelHandle: {
    padding: 20,
  },
});
export default OptionsSlider;
