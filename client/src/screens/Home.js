import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faLock,
  faHouse,
  faDumbbell,
  faClock,
  faStopwatch,
  faAngleRight,
  faDroplet,
  faFireFlameCurved,
  faBed,
  faFaceSmile,
  faFaceAngry,
  faFaceSadTear,
  faFaceMeh,
  faFaceTired,
  faGaugeSimple,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";

import Welcome from "../containers/Welcome";
import { useNavigation } from "@react-navigation/native";

import StartButton from "../containers/StartButton";
import DailyGoals from "../containers/DailyGoals";
import RecentWorkouts from "../containers/RecentWorkouts";

const Home = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("StartWorkout");
  };
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
    faClock,
    faStopwatch,
    faAngleRight,
    faDroplet,
    faFireFlameCurved,
    faBed,
    faFaceSmile,
    faFaceAngry,
    faFaceSadTear,
    faFaceMeh,
    faFaceTired,
    faGaugeSimple,
    faTrashCan,
    faXmark
  );
  return (
    <View style={styles.container}>
      <Welcome name={"Enrique"} />
      <DailyGoals />
      <RecentWorkouts />
      <StartButton text={"Start Workout"} press={handlePress} />
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
