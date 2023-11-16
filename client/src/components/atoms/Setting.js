import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
const Setting = ({ name, linkTo, icon }) => {
  const Navigator = useNavigation();
  const handlePress = () => {
    Navigator.navigate(linkTo);
  };
  return (
    <TouchableOpacity style={styles.statistic} onPress={handlePress}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <FontAwesomeIcon icon={icon} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <FontAwesomeIcon style={{ color: "#1c1c1c" }} icon={"fa-angle-right"} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  statistic: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2, // This creates the shadow at the bottom
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    marginBottom: 0.5,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
  },
});
export default Setting;
