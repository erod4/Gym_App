import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";
import Widgets from "../containers/Widgets";
import StartWorkout from "../containers/StartWorkout";
import Welcome from "../containers/Welcome";
import Quotes from "../containers/Quotes";

const Home = () => {
  library.add(
    faLock,
    faEnvelope,
    faHouse,
    faDumbbell,
    faChartLine,
    faUser,
    faShoePrints,
    faBottleWater
  );
  return (
    <View style={styles.container}>
      <Welcome name={"Enrique"} />
      <Widgets />
      <Quotes />
      <StartWorkout />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#ddd",
    width: "100%",
    alignItems: "center",

    gap: 10,
  },
});
export default Home;
