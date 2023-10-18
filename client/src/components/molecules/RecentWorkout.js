import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const RecentWorkout = ({ name, date, mood, intensity, duration }) => {
  let icon = "";
  switch (mood) {
    case "happy":
      icon = "fa-face-smile";
      break;
    case "neutral":
      icon = "fa-face-meh";
      break;
    case "tired":
      icon = "fa-face-tired";
      break;
    case "angry":
      icon = "fa-face-angry";
      break;
    case "sad":
      icon = "fa-face-sad-tear";
      break;
    default:
      break;
  }
  return (
    <View style={styles.RecentWorkout}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>Tueday, Jul 16, 2023</Text>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.dataContainer}>
          <FontAwesomeIcon style={styles.icon} icon={"fa-stopwatch"} />
          <Text style={styles.data}>{duration} min</Text>
        </View>
        <View style={styles.dataContainer}>
          <FontAwesomeIcon style={styles.icon} icon={"fa-gauge-simple"} />
          <Text style={styles.data}>{intensity}</Text>
        </View>
        <View style={styles.dataContainer}>
          <FontAwesomeIcon style={styles.icon} icon={icon} />
          <Text style={styles.data}>{mood}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  RecentWorkout: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    padding: 20,
    gap: 10,
  },
  upperContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  lowerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: 15,
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
    color: "#555",
  },
  dataContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  data: {
    fontWeight: "700",
    fontSize: 12,
  },
  icon: {
    fontSize: 10,
    color: "#0077B6",
  },
});
export default RecentWorkout;
