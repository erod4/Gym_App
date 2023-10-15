import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Set = ({ setName }) => {
  return (
    <View style={styles.set}>
      <Text style={styles.setName}>{setName}</Text>
      <View style={styles.reps}>
        <Text style={styles.counts}>8</Text>
        <Text style={styles.notation}>reps</Text>
      </View>
      <View>
        <Text style={styles.counts}>80</Text>
        <Text style={styles.notation}>Lbs</Text>
      </View>
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
