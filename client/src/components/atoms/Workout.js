import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
const Workout = ({ title, day, time, linkTo, id, name }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(linkTo, { id, name });
  };
  return (
    <TouchableOpacity style={styles.workout} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsContainer}>
          <FontAwesomeIcon icon={"fa-calendar"} style={{ color: "#0077B6" }} />
          <Text style={styles.details}>{day}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <FontAwesomeIcon icon={"fa-clock"} style={{ color: "#0077B6" }} />
          <Text style={styles.details}>{time} min</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  workout: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  title: {
    padding: 10,
    fontSize: 30,
    fontWeight: "900",

    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    fontWeight: "900",
    padding: 10,
    color: "#0077B6",
    fontSize: 15,
  },
});
export default Workout;
