import { View, Text, StyleSheet, Dimensions } from "react-native";

import React from "react";

import Swiper from "react-native-swiper";
import Graph from "../components/molecules/Graph";
const WeekAvg = () => {
  return (
    <View style={styles.view}>
      <Swiper style={styles.container} showsButtons={false} loop={false}>
        <View style={styles.slide}>
          <Text style={styles.title}>Calories</Text>
          <Graph title={"Calories"} />
        </View>
        <View style={styles.slide}>
          <Text style={styles.title}>Steps</Text>
          <Graph title={"Steps"} />
        </View>
        <View style={styles.slide}>
          <Text style={styles.title}>Water</Text>
          <Graph title={"Water"} />
        </View>
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: "90%",
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1c1c1c",
  },
});
export default WeekAvg;
