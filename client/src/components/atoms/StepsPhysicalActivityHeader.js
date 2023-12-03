import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const StepsPhysicalActivityHeader = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const navigation = useNavigation();
  const target3 = ["Steps", "Water", "Sleep"];
  const [selection, setSelection] = useState("Steps");
  const handleSelect = (selected, index) => {
    setSelection(selected);
  };

  useEffect(() => {
    navigation.navigate("PhysicalActivity", {
      selected: selection,
      isDarkMode,
    });
  }, [selection]);
  const styles = StyleSheet.create({
    dropDown: {
      backgroundColor: "transparent",
    },
    dropDownOptionsContainer: {
      position: "absolute",
      top: "100%", // Position the dropdown below the dropdown button
      transform: [{ translateY: 0 }],
      borderRadius: 10,
    },

    dropDownSelectionText: {
      color: isDarkMode ? "#fff" : "#000",
      fontWeight: "700",
    },
  });

  const dropDownButton = (selectedItem, index) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.dropDownSelectionText}>{selectedItem}</Text>
        <FontAwesomeIcon icon={"fa-chevron-down"} color="#999" />
      </View>
    );
  };
  return (
    <SelectDropdown
      buttonStyle={styles.dropDown}
      data={target3}
      showsVerticalScrollIndicator={false}
      renderCustomizedButtonChild={dropDownButton}
      defaultValueByIndex={0}
      dropdownStyle={styles.dropDownOptionsContainer}
      onSelect={handleSelect}
    />
  );
};
export default StepsPhysicalActivityHeader;
