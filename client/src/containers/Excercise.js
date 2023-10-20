import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Set from "../components/atoms/Set";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import OptionsButton from "../components/atoms/OptionsButton";
const Excercise = ({ excerciseName, onPress, id }) => {
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
          <Text style={styles.excerciseName}>{excerciseName}</Text>
          <OptionsButton id={id} open={onPress[2]} />
        </View>
        <Set onPress={onPress} time={3} setName={"Set 1"} weight={80} />
        <Set onPress={onPress} time={2} setName={"Set 2"} weight={145} />
        <Set onPress={onPress} time={1} setName={"Set 3"} weight={225} />
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
