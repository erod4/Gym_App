import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import RecentWorkout from "../components/molecules/RecentWorkout";

const RecentWorkouts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Workouts</Text>
      <ScrollView
        contentContainerStyle={styles.scroll}
        style={styles.scrollContainer}
      >
        <RecentWorkout
          name={"Push 1"}
          duration={30}
          mood={"happy"}
          intensity={10}
        />
        <RecentWorkout
          name={"Push 1"}
          duration={30}
          mood={"sad"}
          intensity={8}
        />
        <RecentWorkout
          name={"Push 1"}
          duration={60}
          mood={"angry"}
          intensity={10}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
  },
  scroll: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  container: {
    width: "90%",
    flex: 2,
  },
  title: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "left",
    padding: 10,
    fontSize: 20,
    fontWeight: "900",
    width: "100%",
  },
});
export default RecentWorkouts;
