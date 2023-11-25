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
import { AppearenceContext } from "../store/actions/clientActions/Appearence";
const EditExcercise = ({ excerciseName, id, markComplete }) => {
  const { closeEdit } = useContext(EditContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    excercise: {
      width: "100%",
      borderRadius: 10,
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      justifyContent: "center",
      alignItems: "center",
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
      borderWidth: 1,
      borderColor: isDarkMode ? "#ddd" : "#000",
      borderRadius: 10,
      flex: 1,
      textAlign: "center",
    },
    buttons: {
      flexDirection: "row",
      gap: 5,
      paddingBottom: 10,
    },
  });
  return (
    <View style={styles.excercise}>
      <View style={styles.excerciseNameContainer}>
        <TextInput
          style={styles.excerciseName}
          placeholderTextColor={"#ddd"}
          placeholder={excerciseName}
        />
      </View>

      <EditSet time={3} setName={"Set 1"} weight={80} />
      <EditSet time={2} setName={"Set 2"} weight={145} />
      <EditSet time={1} setName={"Set 3"} weight={225} />
      <View style={styles.buttons}>
        <GenButton
          name={"Save"}
          color={"rgba(0, 150, 199, 0.25)"}
          horizontalPadding={10}
          buttonWidth={100}
          fontColor={"#0096c7"}
        />
        <GenButton
          name={"Cancel"}
          color={"rgba(0, 150, 199, 0.25)"}
          onPress={closeEdit}
          horizontalPadding={10}
          buttonWidth={100}
          fontColor={"#0096c7"}
        />
      </View>
    </View>
  );
};

export default EditExcercise;
