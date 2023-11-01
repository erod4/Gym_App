import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import AddSetButton from "./AddSetButton";
import { Swipeable } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import SaveSet from "./SaveSet";
const AddSet = ({ setName, closeNewSet }) => {
  const handleSavePress = () => {
    closeNewSet();
  };

  const handleCancelPress = () => {
    closeNewSet();
  };

  const renderRightActions = () => (
    <View style={styles.optionsContainer}>
      <TouchableOpacity style={styles.leftAction} onPress={handleCancelPress}>
        <FontAwesomeIcon style={styles.actionText} icon={"fa-trash-can"} />
      </TouchableOpacity>
    </View>
  );
  return (
    <Swipeable
      overshootRight={false}
      overshootLeft={false}
      renderRightActions={renderRightActions}
      childrenContainerStyle={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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

      <SaveSet onPress={handleSavePress} />
    </Swipeable>
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
    gap: 37,
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
export default AddSet;
