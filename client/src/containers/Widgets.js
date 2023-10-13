import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Widget from "../components/atoms/Widget";

const Widgets = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Hub</Text>
      <View style={styles.widgets}>
        <Widget name={"Cals"} icon={"fa-fire"} data={"2000"} />
        <Widget name={"Steps"} icon={"fa-shoe-prints"} data={"9000"} />
        <Widget name={"Water"} icon={"fa-bottle-water"} data={"2L"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
    height: "20%",
    backgroundColor: "#fff",
    padding: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    padding: 10,
    color: "#1c1c1c",
  },
  widgets: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
});
export default Widgets;