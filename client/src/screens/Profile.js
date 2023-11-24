import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import Setting from "../components/atoms/Setting";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const Profile = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    page: {
      paddingTop: 60,
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: !isDarkMode ? "#fff" : "#192734",
    },
    container: {
      paddingTop: 10,
      paddingBottom: 10,
      width: "90%",
    },
    scroll: {
      gap: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "900",
      padding: 10,
      color: !isDarkMode ? "#000" : "#ddd",
    },
  });
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Profile</Text>
      <ScrollView
        contentContainerStyle={styles.scroll}
        style={styles.container}
      >
        <Setting name={"Account"} linkTo={"Account"} icon={"fa-user"} />

        <Setting name={"Weight Units"} icon={"fa-ruler"} linkTo={"Units"} />
        <Setting name={"Goals"} icon={"fa-chart-line"} linkTo={"Goals"} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    paddingTop: 60,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    width: "90%",
  },
  scroll: {
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    padding: 10,
  },
});
export default Profile;
