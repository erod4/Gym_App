import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Set from "../components/atoms/Set";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import OptionsButton from "../components/atoms/OptionsButton";
import MarkComplete from "../components/atoms/MarkComplete";

import { useSettingsSliderContext } from "../store/actions/clientActions/SettingsSlider";
import AddSetButton from "../components/atoms/AddSetButton";
import AddSet from "../components/atoms/AddSet";
const Excercise = ({ excerciseName, id, markComplete, onPress }) => {
  const [isAddSetActive, setIsAddSetActive] = useState(false);
  const handleAddSetPress = () => {
    setIsAddSetActive(true);
  };

  const handleAddSetClose = () => {
    setIsAddSetActive(false);
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
      <View style={styles.excercise}>
        <View style={styles.excerciseNameContainer}>
          <MarkComplete markComplete={markComplete} />
          <Text style={styles.excerciseName}>{excerciseName}</Text>
          <OptionsButton id={id} />
        </View>
        <Set time={3} setName={"Set 1"} weight={80} onPress={onPress} />
        <Set time={2} setName={"Set 2"} weight={145} onPress={onPress} />
        <Set time={1} setName={"Set 3"} weight={225} onPress={onPress} />
        {isAddSetActive ? (
          <AddSet closeNewSet={handleAddSetClose} setName={"Set 4"} />
        ) : (
          <AddSetButton
            color={"#ddd"}
            name={"Add Set"}
            onPress={handleAddSetPress}
          />
        )}
      </View>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  excercise: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    borderWidth: 0.5,
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
export default Excercise;
