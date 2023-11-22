import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import AccountSettings from "../components/molecules/AccountSettings";
import { ScrollView, Switch } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import More from "../components/molecules/More";
import { AppearenceContext } from "../store/Appearence";

const Account = () => {
  const {theme,toggleTheme}=useContext(AppearenceContext);



  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(theme==='dark');
  const toggleNotifSwitch = () =>
    setIsPushNotificationsEnabled(!isPushNotificationsEnabled);
  const toggleDarkModeSwitch = () => {
    if(theme!=='dark'){
     
      toggleTheme('dark')
      setIsDarkModeEnabled(true)
    }
    else{
      toggleTheme('light')
      setIsDarkModeEnabled(false)
    }
    
  }
  const styles = StyleSheet.create({
    page: {
      backgroundColor: theme==='light'?"#fff":'#111',
      flex: 1,
    },
    sectionTitle: {
      paddingVertical: 10,
      fontWeight: "700",
      fontSize: 20,
      color: "#999",
    },
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
  });
  return (
    <ScrollView style={styles.page}>
      <View
        style={{
          width: "90%",
          borderBottomWidth: 2,
          borderColor: "#999",
          marginHorizontal: 20,
        }}
      >
        <Text style={styles.sectionTitle}>Account Settings</Text>
      </View>
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
      <View
        style={{
          width: "90%",
          borderBottomWidth: 2,
          borderColor: "#999",
          marginHorizontal: 20,
        }}
      >
        <Text style={styles.sectionTitle}>More</Text>
      </View>
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
    paddingVertical: 10,
    fontWeight: "700",
    fontSize: 20,
    color: "#999",
  },
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
});
export default Account;
