import { View, Text, Button, Pressable } from "react-native";
import React, { useCallback, useContext } from "react";
import { trigger } from "react-native-haptic-feedback";

import { StyleSheet } from "react-native";

import StopWatch from "./StopWatch";

import { InteractionContext } from "../store/actions/clientActions/Interaction";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const TimerSlider = ({ activeId }) => {
  const { isTimerOpen, setTimerActive, display } =
    useContext(InteractionContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    page: {
      display: display,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      flex: 1,
      position: "relative",
      ...StyleSheet.absoluteFillObject,
      zIndex: 10,
      flexDirection: "column",
    },
    container: {
      borderRadius: 10,
      padding: 10,
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      alignItems: "center",
      width: "90%",
      height: "45%",
    },
  });
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setTimerActive("none");
            trigger("notificationSuccess");
          }}
          style={{
            paddingHorizontal: 5,
            position: "absolute",
            top: 5,
            right: 5,
            zIndex: 1,
          }}
        >
          <FontAwesomeIcon
            icon={"fa-xmark"}
            size={20}
            color={isDarkMode ? "#ddd" : "#000"}
          />
        </Pressable>
        <StopWatch />
      </View>
    </View>
  );
};

export default TimerSlider;
