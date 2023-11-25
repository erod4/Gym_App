import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const CountUp = ({ min, sec }) => {
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    count: {
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",

      padding: 5,
    },
    time: {
      textAlign: "center",
      color: isDarkMode ? "#ddd" : "#000",
      fontSize: 50,
      fontWeight: "500",
    },
  });
  return (
    <View style={styles.count}>
      <Text style={styles.time}>{min}</Text>
      <Text style={styles.time}>:</Text>
      <Text style={styles.time}>{sec}</Text>
    </View>
  );
};

export default CountUp;
