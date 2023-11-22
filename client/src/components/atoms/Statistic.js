import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
const Statistic = ({ name, linkTo, icon, ionic }) => {
  const Navigator = useNavigation();
  const handlePress = () => {
    Navigator.navigate(linkTo);
  };
  return (
    <TouchableOpacity style={styles.statistic} onPress={handlePress}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        {ionic ? (
          <Icon2 name={icon} size={25} color={"#111"} />
        ) : (
          <Icon name={icon} size={25} color="#111" />
        )}
        <Text style={styles.text}>{name}</Text>
      </View>
      <FontAwesomeIcon style={{ color: "#0096c7" }} icon={"fa-angle-right"} />
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
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
  },
});
export default Statistic;
