import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import Set from "../components/atoms/Set";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import OptionsButton from "../components/atoms/OptionsButton";
import MarkComplete from "../components/atoms/MarkComplete";
import { trigger } from "react-native-haptic-feedback";

import { InteractionContext } from "../store/actions/clientActions/Interaction";
import AddSetButton from "../components/atoms/AddSetButton";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";
const Excercise = ({ excerciseName, id, markComplete, onPress }) => {
  const { activeInteraction, setActive, display } =
    useContext(InteractionContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    excercise: {
      width: "100%",
      borderRadius: 10,
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 10,
      borderWidth: 0.5,
      borderColor: isDarkMode ? "#ddd" : "#000",
    },
    excerciseNameContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      flexDirection: "row",
    },
    excerciseName: {
      fontWeight: "900",
      fontSize: 20,
      color: "#0096c7",
      flex: 1,
      textAlign: "center",
    },
    optionsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    leftAction: {
      backgroundColor: "red",
      padding: 20,
      height: "100%",
      justifyContent: "center",
    },

    actionText: {
      fontWeight: "500",
      color: "#fff",
    },
  });
  const renderRightActions = () => (
    <View style={styles.optionsContainer}>
      <TouchableOpacity style={styles.leftAction}>
        <FontAwesomeIcon style={styles.actionText} icon={"fa-trash-can"} />
      </TouchableOpacity>
    </View>
  );
  return (
    <Swipeable
      overshootRight={false}
      overshootLeft={false}
      renderRightActions={renderRightActions}
    >
      <View style={styles.excercise}>
        <View style={styles.excerciseNameContainer}>
          <MarkComplete markComplete={markComplete} />
          <Text style={styles.excerciseName}>{excerciseName}</Text>
          <OptionsButton id={id} />
        </View>
        <Set time={3} setName={"Set 1"} weight={80} onPress={onPress} />
        <Set time={3} setName={"Set 2"} weight={145} onPress={onPress} />
        <Set time={3} setName={"Set 3"} weight={225} onPress={onPress} />
        {activeInteraction != "ADD_SET" && (
          <AddSetButton
            color={"#ddd"}
            name={"Add Set"}
            onPress={() => {
              setActive("ADD_SET");
              trigger("notificationSuccess");
            }}
          />
        )}
      </View>
    </Swipeable>
  );
};

export default Excercise;
