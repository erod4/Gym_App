import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faLock,
  faHouse,
  faDumbbell,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";

import Widgets from "../containers/Widgets";

import Welcome from "../containers/Welcome";

import WeekAvg from "../containers/WeekAvg";
import StartButton from "../containers/StartButton";

const Home = () => {
  library.add(
    faLock,
    faEnvelope,
    faHouse,
    faDumbbell,
    faChartLine,
    faUser,
    faShoePrints,
    faBottleWater,
    faCalendar,
    faClock
  );
  return (
    <View style={styles.container}>
      <Welcome name={"Enrique"} />
      <Widgets />

      <WeekAvg />
      <StartButton text={"Start Workout"} />
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
    justifyContent: "space-between",
    paddingBottom: 10,
    gap: 10,
  },
});
export default Home;
