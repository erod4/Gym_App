import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Set = ({ setName, onPress, time }) => {
  const handlePress = () => {
    onPress(time);
  };

  return (
    <View style={styles.set}>
      <Text style={styles.setName}>{setName}</Text>
      <View style={styles.reps}>
        <Text style={styles.counts}>8</Text>
        <Text style={styles.notation}>reps</Text>
      </View>
      <View style={styles.reps}>
        <Text style={styles.counts}>80</Text>
        <Text style={styles.notation}>Lbs</Text>
      </View>
      <TouchableOpacity style={styles.reps} onPress={handlePress}>
        <FontAwesomeIcon style={styles.counts} icon={"fa-stopwatch"} />
        <Text style={styles.notation}>{time} min</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  set: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  reps: {
    flexDirection: "column",
    alignItems: "center",
  },
  setName: {
    fontWeight: "900",
    color: "#1c1c1c",
  },
  counts: {
    fontSize: 20,
    color: "#0077B6",
    fontWeight: "500",
  },
  notation: {
    fontSize: 14,
    color: "#1c1c1c",
    fontWeight: "500",
  },
});
export default Set;
