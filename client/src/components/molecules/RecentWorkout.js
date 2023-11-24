import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const RecentWorkout = ({ name, date, mood, intensity, duration }) => {
  const { isDarkMode } = useContext(AppearenceContext);
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
  const styles = StyleSheet.create({
    RecentWorkout: {
      backgroundColor: !isDarkMode ? "#fff" : "#253341",
      width: "100%",
      borderRadius: 10,
      borderWidth: 0.5,
      padding: 20,
      gap: 10,
      flexDirection: "row",
      borderColor: !isDarkMode ? "#000" : "#ddd",
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

      flex: 1,
    },
    title: {
      fontWeight: "900",
      fontSize: 15,
      color: !isDarkMode ? "#000" : "#ddd",
    },
    date: {
      fontSize: 12,
      fontWeight: "400",
      color: !isDarkMode ? "#555" : "#fff",
    },
    dataContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    data: {
      fontWeight: "700",
      fontSize: 12,
      color: !isDarkMode ? "#000" : "#fff",
    },
    label: {
      color: !isDarkMode ? "#aaa" : "#fff",
      fontSize: 10,
    },
    icon: {
      color: "#0077B6",
    },
  });
  return (
    <View style={styles.RecentWorkout}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>Tueday, Jul 16, 2023</Text>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.dataContainer}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={"fa-stopwatch"}
              size={14}
              color={!isDarkMode ? "#000" : "#ddd"}
            />
            <Text style={styles.data}>{duration} min</Text>
          </View>

          <Text style={styles.label}>Duration</Text>
        </View>
        <View style={styles.dataContainer}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={"fa-gauge-simple"}
              size={14}
              color={!isDarkMode ? "#000" : "#ddd"}
            />
            <Text style={styles.data}>{intensity}</Text>
          </View>

          <Text style={styles.label}>Intensity</Text>
        </View>
        <View style={styles.dataContainer}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={icon}
              size={14}
              color={!isDarkMode ? "#000" : "#ddd"}
            />
            <Text style={styles.data}>{mood}</Text>
          </View>
          <Text style={styles.label}>Mood</Text>
        </View>
      </View>
    </View>
  );
};

export default RecentWorkout;
