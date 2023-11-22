import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Swipeable from "react-native-gesture-handler/Swipeable";
const EditSet = ({ setName, weight, time }) => {
  return (
    <View style={styles.set}>
      <Text style={styles.setName}>{setName}</Text>
      <View style={styles.reps}>
        <TextInput
          style={styles.counts}
          placeholder={"8"}
          placeholderTextColor={"#ddd"}
        />
        <Text style={styles.notation}>reps</Text>
      </View>
      <View style={styles.reps}>
        <TextInput
          style={styles.counts}
          placeholder={`${weight}`}
          placeholderTextColor={"#ddd"}
        />
        <Text style={styles.notation}>Lbs</Text>
      </View>
      <View style={styles.reps}>
        <TextInput
          placeholder={`${time}`}
          placeholderTextColor={"#ddd"}
          style={styles.counts}
        />
        <Text style={styles.notation}>min</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  set: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 30,
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
    color: "#111",
    fontWeight: "500",
  },
  notation: {
    fontSize: 14,
    color: "#1c1c1c",
    fontWeight: "500",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  leftAction: {
    backgroundColor: "red",
    padding: 10,
  },

  actionText: {
    fontWeight: "500",
    color: "#fff",
  },
});
export default EditSet;
