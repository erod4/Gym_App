import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ExcerSetting = ({ name, icon }) => {
  return (
    <TouchableOpacity style={styles.setting}>
      <FontAwesomeIcon size={18} icon={icon} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  setting: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
  },
  name: {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "500",
  },
});
export default ExcerSetting;
