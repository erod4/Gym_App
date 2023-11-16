import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
const More = () => {
  const [active, setActive] = useState("");

  const handlePress = (index) => {
    setActive(index);
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
            <Text>About Us...</Text>
          </View>
        )}
        {index == 1 && (
          <View style={styles.editProfileContainer}>
            <Text>Privacy Policy...</Text>
          </View>
        )}
        {index == 2 && (
          <View style={styles.editProfileContainer}>
            <Text>Terms and Conditions...</Text>
          </View>
        )}
      </>
    );
  };
  return (
    <>
      <Accordion
        activeSections={active}
        sections={["About Us", "Privacy Policy", "Terms and Conditions"]}
        renderHeader={header}
        renderContent={content}
        onChange={handlePress}
        containerStyle={styles.container}
        underlayColor="#fff"
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",

    paddingHorizontal: 20,
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
    flexDirection: "column",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: -1, // This creates the shadow at the bottom
    },
    shadowOpacity: 0.3, // You can adjust the opacity of the shadow if needed
    shadowRadius: 3,

    marginVertical: 1, // Add some margin at the bottom to separate it from other elements
  },
  editProfileHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  editProfileHeaderTitle: {
    fontWeight: "700",
  },
  editProfileHeaderEditButtonText: {
    color: "#0077b6",
    fontWeight: "700",
  },
  dataFieldsContainer: {},
  dataFieldContainer: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  dataFieldTitle: {
    fontWeight: "700",
    color: "#777",
    paddingBottom: 5,
  },
  dataFieldInput: {
    textAlign: "left",
    width: "100%",
    fontWeight: "700",
    backgroundColor: "#eee",
    borderRadius: 5,
    height: 25,
    paddingHorizontal: 5,
  },
  dataFieldText: {
    textAlign: "left",
    width: "100%",
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingVertical: 5,
  },
  saveButtonText: {
    color: "#0077b6",
    fontWeight: "900",
  },
  cancelButtonText: {
    fontWeight: "900",
    color: "#777",
  },
  touchableOpacity: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});
export default More;
