import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import GenButton from "./GenButton";
const AddSet = ({ setName, closeNewSet }) => {
  const handleSavePress = () => {
    closeNewSet();
  };

  const handleCancelPress = () => {
    closeNewSet();
  };
  return (
    <View>
      <View style={styles.set}>
        <Text style={styles.setName}>{setName}</Text>
        <View style={styles.reps}>
          <TextInput style={styles.counts} placeholderTextColor={"#0077B6"} />
          <Text style={styles.notation}>reps</Text>
        </View>
        <View style={styles.reps}>
          <TextInput style={styles.counts} placeholderTextColor={"#0077B6"} />
          <Text style={styles.notation}>Lbs</Text>
        </View>
        <View style={styles.reps}>
          <TextInput placeholderTextColor={"#0077B6"} style={styles.counts} />
          <Text style={styles.notation}>min</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <GenButton onPress={handleSavePress} name={"Add"} color={"#0077B6"} />
        <GenButton onPress={handleCancelPress} name={"Cancel"} color={"#ddd"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  set: {
    width: "85%",
    position: "relative",
    left: -15,
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
    color: "#0077B6",
    fontWeight: "500",
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  notation: {
    fontSize: 14,
    color: "#1c1c1c",
    fontWeight: "500",
  },

  leftAction: {
    backgroundColor: "red",
    padding: 10,
  },

  actionText: {
    fontWeight: "500",
    color: "#fff",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
export default AddSet;
