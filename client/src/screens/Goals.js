import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import Incrementer from "../components/atoms/Incrementer";

const Goals = () => {
  const [active, setActive] = useState("");
  const target1 = [
    "0.25L",
    "0.50L",
    "0.75L",
    "1.00L",
    "1.25L",
    "1.50L",
    "1.75L",
    "2.00L",
    "2.25L",
    "2.50L",
    "2.75L",
    "3.00L",
    "3.25L",
    "3.50L",
    "3.75L",
    "4.00L",
  ];
  const target2 = [
    "1000",
    "2000",
    "3000",
    "4000",
    "5000",
    "6000",
    "7000",
    "8000",
    "9000",
    "10000",
    "11000",
    "12000",
    "13000",
    "14000",
    "15000",
  ];
  const target3 = ["Fl Oz", "Liters"];
  const handlePress = (index) => {
    setActive(index);
  };
  const dropDownButton = (selectedItem, index) => {
    return (
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <Text style={styles.dropDownSelectionText}>{selectedItem}</Text>
        <FontAwesomeIcon icon={"fa-chevron-down"} color="#999" />
      </View>
    );
  };
  const header = (content, index, isActive, sections) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>{sections[index]}</Text>

        <FontAwesomeIcon
          icon={isActive ? "fa-chevron-down" : "fa-chevron-right"}
        />
      </View>
    );
  };

  const content = (content, index, isActive, sections) => {
    return (
      <>
        {index == 0 && (
          <View style={styles.editProfileContainer}>
            <SelectDropdown
              buttonStyle={styles.dropDown}
              data={target1}
              showsVerticalScrollIndicator={false}
              renderCustomizedButtonChild={dropDownButton}
              defaultValueByIndex={0}
              dropdownStyle={styles.dropDownOptionsContainer}
              drop
            />
          </View>
        )}
        {index == 1 && (
          <View style={styles.editProfileContainer}>
            <SelectDropdown
              buttonStyle={styles.dropDown}
              data={target2}
              showsVerticalScrollIndicator={false}
              renderCustomizedButtonChild={dropDownButton}
              defaultValueByIndex={0}
              dropdownStyle={styles.dropDownOptionsContainer}
              drop
            />
          </View>
        )}
        {index == 2 && (
          <View style={styles.editProfileContainer}>
            <Incrementer />
          </View>
        )}
      </>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          width: "90%",
          borderBottomWidth: 2,
          borderColor: "#999",
          marginHorizontal: 20,
        }}
      >
        <Text style={styles.sectionTitle}>Goals</Text>
      </View>
      <Accordion
        activeSections={active}
        sections={["Water", "Steps", "Weight", "Calories"]}
        renderHeader={header}
        renderContent={content}
        onChange={handlePress}
        containerStyle={styles.container}
        underlayColor="#fff"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    paddingVertical: 10,
    fontWeight: "700",
    fontSize: 20,
    color: "#999",
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  sectionText: {
    fontWeight: "700",
    fontSize: 18,
  },
  editProfileContainer: {
    justifyContent: "center",

    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  dropDown: {
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  dropDownOptionsContainer: {
    position: "absolute",
    top: "100%", // Position the dropdown below the dropdown button
    transform: [{ translateY: 0 }],
    borderRadius: 10,
  },

  dropDownSelectionText: {
    color: "#0077b6",
    fontWeight: "700",
  },
});
export default Goals;
