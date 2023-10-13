import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Statistics = () => {
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",

    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Statistics;
