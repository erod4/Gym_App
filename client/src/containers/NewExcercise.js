import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { trigger } from "react-native-haptic-feedback";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const NewExcercise = ({ onDone }) => {
  const [excerciseName, setExcerciseName] = useState("");
  const { isDarkMode } = useContext(AppearenceContext);

  const target = [
    "Arms",
    "Back",
    "Chest",
    "Core",
    "Legs",
    "Shoulders",
    "Other",
  ];
  const category = [
    "Barbell",
    "Dumbell",
    "Machine/Other",
    "Weighted BodyWeight",
    "Assisted Bodyweight",
  ];
  const styles = StyleSheet.create({
    excercise: {
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
      width: "80%",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      paddingBottom: 10,
    },
    saveButton: {
      fontWeight: "700",
      color: "#0077b6",
    },
    exit: {
      padding: 10,
    },
    title: {
      fontWeight: "700",
      fontSize: 15,
      color: isDarkMode ? "#ddd" : "#000",
    },
    input: {
      width: "100%",
      height: 30,

      paddingHorizontal: 10,
      backgroundColor: "#ddd",
      borderRadius: 5,
    },
    dropDown: {
      flexDirection: "row",
      width: "100%",
      paddingHorizontal: 10,
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      alignItems: "center",
    },
    customDropDown: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
    dropDownOptionsContainer: {
      height: 250,
      position: "absolute",
      top: "100%", // Position the dropdown below the dropdown button
      transform: [{ translateY: 0 }],
      borderRadius: 10,
    },

    dropDownTitle: {
      fontWeight: "700",
      color: isDarkMode ? "#ddd" : "#000",
    },
    dropDownSelectionText: {
      color: "#999",
    },
  });
  const dropDownButtonBodyPart = (selectedItem, index) => {
    return (
      <View style={styles.customDropDown}>
        <Text style={styles.dropDownTitle}>Body Part</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={styles.dropDownSelectionText}>{selectedItem}</Text>
          <FontAwesomeIcon icon={"fa-chevron-down"} color={"#999"} />
        </View>
      </View>
    );
  };
  const dropDownButtonCategory = (selectedItem, index) => {
    return (
      <View style={styles.customDropDown}>
        <Text style={styles.dropDownTitle}>Category</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={styles.dropDownSelectionText}>{selectedItem}</Text>
          <FontAwesomeIcon icon={"fa-chevron-down"} color="#999" />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.excercise}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.exit} onPress={onDone}>
            <FontAwesomeIcon
              icon={"fa-xmark"}
              color={isDarkMode ? "#ddd" : "#000"}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Add New Excercise</Text>
          <TouchableOpacity
            onPress={onDone}
            style={styles.saveButtonContainer}
            disabled={excerciseName.length > 0 ? false : true}
          >
            <Text
              style={[
                styles.saveButton,
                { color: excerciseName.length > 0 ? "#0096c7" : "#999" },
              ]}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Add Name"
          onChangeText={(newText) => setExcerciseName(newText)}
        />

        <SelectDropdown
          buttonStyle={styles.dropDown}
          data={target}
          showsVerticalScrollIndicator={false}
          renderCustomizedButtonChild={dropDownButtonBodyPart}
          defaultValueByIndex={0}
          dropdownStyle={styles.dropDownOptionsContainer}
          drop
        />
        <SelectDropdown
          buttonStyle={styles.dropDown}
          data={category}
          showsVerticalScrollIndicator={false}
          renderCustomizedButtonChild={dropDownButtonCategory}
          defaultValueByIndex={0}
          dropdownStyle={styles.dropDownOptionsContainer}
          drop
        />
      </View>
    </View>
  );
};

//         <GenButton name={"Add"} color={"#0077B6"} onPress={onDone} />
// <GenButton name={"Cancel"} color={"#ddd"} onPress={onDone} />

export default NewExcercise;
