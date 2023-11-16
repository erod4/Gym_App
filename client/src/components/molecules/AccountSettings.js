import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const AccountSettings = () => {
  const [active, setActive] = useState("");
  const [isEditProfileMode, setIsEditProfileMode] = useState(false);
  const [isEditPasswordMode, setIsEditPasswordMode] = useState(false);
  const handlePress = (index) => {
    setActive(index);
    if (index == 1) {
      setIsEditProfileMode(false);
    } else {
      setIsEditPasswordMode(false);
    }
  };
  const handleProfileEditPress = () => {
    setIsEditProfileMode(true);
  };
  const handleProfileCancelPress = () => {
    setIsEditProfileMode(false);
  };

  const handlePasswordEditPress = () => {
    setIsEditPasswordMode(true);
  };
  const handlePasswordCancelPress = () => {
    setIsEditPasswordMode(false);
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
            <View style={styles.editProfileHeader}>
              <Text style={styles.editProfileHeaderTitle}>
                Personal Details
              </Text>
              <TouchableOpacity
                onPress={handleProfileEditPress}
                style={styles.touchableOpacity}
              >
                <Text style={styles.editProfileHeaderEditButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dataFieldsContainer}>
              <View style={styles.dataFieldContainer}>
                <Text style={styles.dataFieldTitle}>Name</Text>
                {isEditProfileMode ? (
                  <TextInput
                    style={styles.dataFieldInput}
                    placeholder="Enrique Rodriguez"
                  />
                ) : (
                  <Text style={styles.dataFieldText}>Enrique Rodriguez</Text>
                )}
              </View>
              <View style={styles.dataFieldContainer}>
                <Text style={styles.dataFieldTitle}>UserName</Text>
                {isEditProfileMode ? (
                  <TextInput
                    style={styles.dataFieldInput}
                    placeholder="erod164"
                  />
                ) : (
                  <Text style={styles.dataFieldText}>erod164</Text>
                )}
              </View>
              <View style={styles.dataFieldContainer}>
                <Text style={styles.dataFieldTitle}>Email</Text>
                {isEditProfileMode ? (
                  <TextInput
                    style={styles.dataFieldInput}
                    placeholder="erod71@outlook.com"
                  />
                ) : (
                  <Text style={styles.dataFieldText}>erod71@outlook.com</Text>
                )}
              </View>
            </View>
            {isEditProfileMode && (
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchableOpacity}
                  onPress={handleProfileCancelPress}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        {index == 1 && (
          <View style={styles.editProfileContainer}>
            <View style={styles.editProfileHeader}>
              <Text style={styles.editProfileHeaderTitle}>Edit Password</Text>
              <TouchableOpacity
                onPress={handlePasswordEditPress}
                style={styles.touchableOpacity}
              >
                <Text style={styles.editProfileHeaderEditButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dataFieldsContainer}>
              <View style={styles.dataFieldContainer}>
                <Text style={styles.dataFieldTitle}>
                  {isEditPasswordMode ? "New Password" : "Password"}
                </Text>
                {isEditPasswordMode ? (
                  <TextInput
                    style={styles.dataFieldInput}
                    placeholder="••••••••"
                  />
                ) : (
                  <Text style={styles.dataFieldText}>••••••••</Text>
                )}
              </View>
              {isEditPasswordMode && (
                <View style={styles.dataFieldContainer}>
                  <Text style={styles.dataFieldTitle}>
                    Confirm New Password
                  </Text>
                  {isEditPasswordMode ? (
                    <TextInput
                      style={styles.dataFieldInput}
                      placeholder="••••••••"
                    />
                  ) : (
                    <Text style={styles.dataFieldText}>••••••••</Text>
                  )}
                </View>
              )}
            </View>
            {isEditPasswordMode && (
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchableOpacity}
                  onPress={handlePasswordCancelPress}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </>
    );
  };
  return (
    <>
      <Accordion
        activeSections={active}
        sections={["Edit Profile ", "Change Password"]}
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
    backgroundColor: "#fff",
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
    fontSize: 15,
  },
  editProfileHeaderEditButtonText: {
    color: "#0077b6",
    fontWeight: "700",
    fontSize: 15,
  },

  dataFieldContainer: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  dataFieldTitle: {
    fontWeight: "700",
    color: "#777",
    paddingBottom: 5,
    fontSize: 18,
  },
  dataFieldInput: {
    textAlign: "left",
    width: "100%",
    fontWeight: "700",
    backgroundColor: "#fff",

    height: 25,
    paddingHorizontal: 5,
    fontSize: 15,
    borderBottomWidth: 0.5,
    borderColor: "#999",
  },
  dataFieldText: {
    textAlign: "left",
    width: "100%",
    fontWeight: "700",
    fontSize: 15,
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
export default AccountSettings;
