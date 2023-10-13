import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Welcome = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    flexDirection: "column",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    height: "20%",
    backgroundColor: "#0077b6",

    padding: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    padding: 10,
    color: "#1c1c1c",
  },
});
export default Welcome;