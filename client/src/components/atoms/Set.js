import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { WeightSliderContext } from "../../store/actions/clientActions/WeightSlider";

import { TimerSliderContext } from "../../store/actions/clientActions/TimerSlider";
import { TimerContext } from "../../store/actions/clientActions/Timer.js";
import { SettingsSliderContext } from "../../store/actions/clientActions/SettingsSlider";

const Set = ({ setName, weight, time, onPress }) => {
  const { openWeightSlider } = useContext(WeightSliderContext);
  const { closeTimerSlider } = useContext(TimerSliderContext);
  const { passTimeToTimer } = useContext(TimerContext);
  const { closeSettingsSlider } = useContext(SettingsSliderContext);
  const handleTimerPress = () => {
    passTimeToTimer(time * 60);
  };
  const handleWeightPress = () => {
    closeSettingsSlider();
    closeTimerSlider();
    openWeightSlider(weight);
  };
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

const styles = StyleSheet.create({
  set: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 30,
  },
  reps: {
    flexDirection: "column",
    alignItems: "center",
  },
  setName: {
    fontWeight: "900",
    color: "#1c1c1c",
  },
  counts: {
    fontSize: 20,
    color: "#0077B6",
    fontWeight: "500",
  },
  notation: {
    fontSize: 14,
    color: "#1c1c1c",
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
export default Set;
