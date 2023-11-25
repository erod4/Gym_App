import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { trigger } from "react-native-haptic-feedback";
import { TimerContext } from "../../store/actions/clientActions/Timer.js";
import { InteractionContext } from "../../store/actions/clientActions/Interaction.js";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence.js";

const Set = ({ setName, weight, time, onPress }) => {
  const { setActive, setTimerActive } = useContext(InteractionContext);
  const { passTimeToTimer, reset } = useContext(TimerContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const handleTimerPress = () => {
    trigger("notificationSuccess");
    setTimerActive("none");
    passTimeToTimer(time * 60, !reset);
  };
  const handleWeightPress = () => {
    trigger("notificationSuccess");

    setActive("WEIGHT", weight);
  };
  const styles = StyleSheet.create({
    set: {
      width: "90%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: "center",
      gap: 30,
    },
    reps: {
      flexDirection: "column",
      alignItems: "center",
    },
    setName: {
      fontWeight: "900",
      color: isDarkMode ? "#ddd" : "#000",
    },
    counts: {
      fontSize: 20,
      color: isDarkMode ? "#ddd" : "#000",
      fontWeight: "500",
    },
    notation: {
      fontSize: 14,
      color: isDarkMode ? "#fff" : "#777",
      fontWeight: "500",
    },
    optionsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    leftAction: {
      backgroundColor: "red",
      padding: 10,
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
      <View style={styles.set}>
        <Text style={styles.setName}>{setName}</Text>
        <View style={styles.reps}>
          <Text style={styles.counts}>8</Text>
          <Text style={styles.notation}>reps</Text>
        </View>
        <TouchableOpacity style={styles.reps} onPress={handleWeightPress}>
          <Text style={styles.counts}>{weight}</Text>
          <Text style={styles.notation}>Lbs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reps} onPress={handleTimerPress}>
          <FontAwesomeIcon style={styles.counts} icon={"fa-stopwatch"} />
          <Text style={styles.notation}>{time} min</Text>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

export default Set;
