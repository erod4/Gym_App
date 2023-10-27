import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const NoAppleHealthData = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Data Available</Text>
      <Text style={styles.message}>
        1. Ensure you have linked Apple Health to our App.
      </Text>
      <Text style={styles.message}>
        2. Ensure you have currently {data} data available.{" "}
      </Text>
      <TouchableOpacity style={styles.tryAgain} onPress={onPress}>
        <Text style={styles.tryAgainText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    gap: 40,
    flex: 1,
    borderWidth: 1,
  },
  title: {
    textAlign: "center",
    width: "100%",
    padding: 10,
    fontWeight: "900",
    fontSize: 20,
  },
  message: {
    textAlign: "left",
    fontWeight: "500",
    fontSize: 13,
    width: "75%",
  },
  tryAgain: {
    backgroundColor: "#0077b6",
    padding: 10,
    borderRadius: 10,
  },
  tryAgainText: {
    fontWeight: "900",
  },
});
export default NoAppleHealthData;
