import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Setting from "../components/atoms/Setting";

const Profile = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Profile</Text>
      <ScrollView
        contentContainerStyle={styles.scroll}
        style={styles.container}
      >
        <Setting name={"Account"} />
        <Setting name={"Link Accounts"} />
        <Setting name={"Weight Units"} />
        <Setting name={"Goals"} />
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
