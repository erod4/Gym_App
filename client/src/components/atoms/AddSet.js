import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { trigger } from "react-native-haptic-feedback";

import { TextInput } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { InteractionContext } from "../../store/actions/clientActions/Interaction";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";
const AddSet = ({ setName, closeNewSet }) => {
  const { activeInteraction, setActive, display } =
    useContext(InteractionContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const handleSavePress = () => {
    setActive("");
    trigger("notificationSuccess");
  };

  const [inputValues, setInputValues] = useState({
    reps: "",
    weight: "",
    time: "",
  });
  const handleChangeText = (key, newText) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [key]: newText,
    }));
  };
  const target = ["Warm-up", "Drop-set", "Failure"];
  const isSaveButtonDisabled = () => {
    return (
      inputValues.reps.length > 0 &&
      inputValues.weight.length > 0 &&
      inputValues.time.length > 0
    );
  };
  const styles = StyleSheet.create({
    page: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      flex: 1,
      position: "relative",
      ...StyleSheet.absoluteFillObject,
      flexDirection: "column",
    },
    container: {
      borderRadius: 10,
      padding: 10,
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      alignItems: "center",
      width: "80%",
      zIndex: 2,
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
      height: 30,

      paddingHorizontal: 10,
      backgroundColor: "#ddd",
      borderRadius: 5,
    },
    dropDown: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      paddingHorizontal: 10,

      alignItems: "center",
    },
    customDropDown: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
    dropDownOptionsContainer: {
      position: "absolute",
      top: "100%", // Position the dropdown below the dropdown button
      transform: [{ translateY: 0 }],
      borderRadius: 10,
      backgroundColor: isDarkMode ? "#aaa" : "#fff",
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
        <Text style={styles.dropDownTitle}>Set Type</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={styles.dropDownSelectionText}>{selectedItem}</Text>
          <FontAwesomeIcon icon={"fa-chevron-down"} color="#999" />
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.page} onPress={handleSavePress}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.exit} onPress={handleSavePress}>
              <FontAwesomeIcon
                icon={"fa-xmark"}
                color={isDarkMode ? "#ddd" : "#000"}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Add New Set</Text>
            <TouchableOpacity
              onPress={handleSavePress}
              style={styles.saveButtonContainer}
              disabled={isSaveButtonDisabled() ? false : true}
            >
              <Text
                style={[
                  styles.saveButton,
                  { color: isSaveButtonDisabled() ? "#0096c7" : "#999" },
                ]}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ alignItems: "center", gap: 5 }}>
              <Text
                style={{
                  fontWeight: "700",
                  color: isDarkMode ? "#ddd" : "#000",
                }}
              >
                Reps
              </Text>

              <TextInput
                placeholderTextColor={isDarkMode ? "#888" : ""}
                autoCorrect={false}
                keyboardType="number-pad"
                style={styles.input}
                placeholder="12"
                onChangeText={(newText) => handleChangeText("reps", newText)}
              />
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Text
                style={{
                  fontWeight: "700",
                  color: isDarkMode ? "#ddd" : "#000",
                }}
              >
                Weight
              </Text>

              <TextInput
                placeholderTextColor={isDarkMode ? "#888" : ""}
                autoCorrect={false}
                keyboardType="number-pad"
                style={styles.input}
                placeholder="150lbs"
                onChangeText={(newText) => handleChangeText("weight", newText)}
              />
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Text
                style={{
                  fontWeight: "700",
                  color: isDarkMode ? "#ddd" : "#000",
                }}
              >
                Time
              </Text>

              <TextInput
                placeholderTextColor={isDarkMode ? "#888" : ""}
                autoCorrect={false}
                keyboardType="number-pad"
                style={styles.input}
                placeholder="3 min"
                onChangeText={(newText) => handleChangeText("time", newText)}
              />
            </View>
          </View>

          <SelectDropdown
            buttonStyle={styles.dropDown}
            data={target}
            showsVerticalScrollIndicator={false}
            renderCustomizedButtonChild={dropDownButtonBodyPart}
            defaultValueByIndex={0}
            dropdownStyle={styles.dropDownOptionsContainer}
          />
        </View>
      </View>
    </>
  );
};

export default AddSet;
