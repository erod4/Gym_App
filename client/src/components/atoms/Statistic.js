import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";
const Statistic = ({ name, linkTo, icon, ionic }) => {
  const { isDarkMode } = useContext(AppearenceContext);
  const Navigator = useNavigation();
  const handlePress = () => {
    Navigator.navigate(linkTo);
  };
  const styles = StyleSheet.create({
    statistic: {
      width: "100%",
      height: 80,
      borderRadius: 10,
      backgroundColor: !isDarkMode ? "#fff" : "#253341",
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: !isDarkMode ? "#000" : "#ddd",
    },
    text: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontWeight: "900",
      fontSize: 20,
      color: !isDarkMode ? "#000" : "#ddd",
    },
  });
  return (
    <TouchableOpacity style={styles.statistic} onPress={handlePress}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        {ionic ? (
          <Icon2 name={icon} size={25} color={!isDarkMode ? "#000" : "#ddd"} />
        ) : (
          <Icon name={icon} size={25} color={!isDarkMode ? "#000" : "#ddd"} />
        )}
        <Text style={styles.text}>{name}</Text>
      </View>
      <FontAwesomeIcon style={{ color: "#0096c7" }} icon={"fa-angle-right"} />
    </TouchableOpacity>
  );
};

export default Statistic;
