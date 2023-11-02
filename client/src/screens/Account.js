import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import AccountSettings from "../components/molecules/AccountSettings";
import { ScrollView, Switch } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import More from "../components/molecules/More";

const Account = () => {
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const toggleNotifSwitch = () =>
    setIsPushNotificationsEnabled(!isPushNotificationsEnabled);
  const toggleDarkModeSwitch = () => setIsDarkModeEnabled(!isDarkModeEnabled);
  return (
    <ScrollView style={styles.page}>
      <Text style={styles.sectionTitle}>Account Settings</Text>
      <AccountSettings />
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Push Notifications</Text>
          <Switch
            trackColor={{ false: "#eee", true: "#eee" }}
            thumbColor={isDarkModeEnabled ? "#0077b6" : "#0077b6"}
            ios_backgroundColor="#eee"
            onValueChange={toggleNotifSwitch}
            value={isPushNotificationsEnabled}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#eee", true: "#eee" }}
            thumbColor={isDarkModeEnabled ? "#0077b6" : "#0077b6"}
            ios_backgroundColor="#eee"
            onValueChange={toggleDarkModeSwitch}
            value={isDarkModeEnabled}
          />
        </View>
      </View>
      <Text style={styles.sectionTitle}>More</Text>
      <More />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
  },
  sectionTitle: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: "700",
    fontSize: 20,
    color: "#999",
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
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
});
export default Account;
