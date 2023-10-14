import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FullWidget from "../components/molecules/FullWidget";

const Widgets = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Dashboard</Text>
      <View style={styles.widgets}>
        <FullWidget
          name={"Calories"}
          icon={"fa-fire"}
          data={"2000"}
          percent={75}
        />
        <FullWidget
          name={"Steps"}
          icon={"fa-shoe-prints"}
          data={"9000"}
          percent={100}
        />
        <FullWidget
          name={"Water"}
          icon={"fa-bottle-water"}
          data={"2L"}
          percent={95}
        />
        {/* <Widget name={"Steps"} icon={"fa-shoe-prints"} data={"9000"} />
        <Widget name={"Water"} icon={"fa-bottle-water"} data={"2L"} /> */}
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
    height: "25%",
    backgroundColor: "#fff",
    padding: 10,
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

    flex: 1,
  },
});
export default Widgets;
