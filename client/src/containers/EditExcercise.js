import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import Set from "../components/atoms/Set";
import EditSet from "../components/atoms/EditSet";
import GenButton from "../components/atoms/GenButton";

import { EditContext } from "../store/actions/clientActions/EditWorkout";
const EditExcercise = ({ excerciseName, id, markComplete }) => {
  const { closeEdit } = useContext(EditContext);

  return (
    <View style={styles.excercise}>
      <View style={styles.excerciseNameContainer}>
        <TextInput
          style={styles.excerciseName}
          placeholderTextColor={"#1c1c1c"}
          placeholder={excerciseName}
        />
      </View>

      <EditSet time={3} setName={"Set 1"} weight={80} />
      <EditSet time={2} setName={"Set 2"} weight={145} />
      <EditSet time={1} setName={"Set 3"} weight={225} />
      <View style={styles.buttons}>
        <GenButton name={"Save"} color={"#0077B6"} horizontalPadding={10} buttonWidth={100}/>
        <GenButton name={"Cancel"} color={"#ddd"} onPress={closeEdit} horizontalPadding={10} buttonWidth={100}/>
      </View>
    </View>
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
  buttons: {
    flexDirection: "row",
    gap: 5,
    paddingBottom: 10,
  },
});
export default EditExcercise;
