import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const SaveSet = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesomeIcon icon={"fa-check"} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
export default SaveSet;
