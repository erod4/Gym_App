import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";

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
  faGear,
  faEllipsisVertical,
  faCircleCheck,
  faPenToSquare,
  faCheck,
  faWeightScale,
  faArrowUp,
  faArrowDown,
  faChevronDown,
  faChevronRight,
  faLink,
  faRuler,
  faBullseye,
  faChevronUp,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";

import Welcome from "../containers/Welcome";
import { useNavigation } from "@react-navigation/native";
import { useHealth } from "../store/actions/clientActions/AppleHealth";
import StartButton from "../containers/StartButton";
import DailyGoals from "../containers/DailyGoals";
import RecentWorkouts from "../containers/RecentWorkouts";
import RatingSlider from "../containers/RatingSlider";
import WaterSlider from "../containers/WaterSlider";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { AppleHealthContext } from "../store/actions/clientActions/PhysicalActivity";

const Home = () => {
  const { appleHealthPermissionGranted, requestPermissions } =
    useContext(AppleHealthContext);

  useEffect(() => {
    if (!appleHealthPermissionGranted) {
      requestPermissions();
    }
  }, [appleHealthPermissionGranted]);
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
    faXmark,
    faGear,
    faEllipsisVertical,
    faCircleCheck,
    faPenToSquare,
    faCheck,
    faWeightScale,
    faArrowUp,
    faArrowDown,
    faCheck,
    faChevronDown,
    faChevronRight,
    faLink,
    faRuler,
    faBullseye,
    faChevronUp,
    faMoon
  );
  return (
    <View style={styles.container}>
      <Welcome name={"Enrique"} />
      <DailyGoals />
      <RecentWorkouts />
      <StartButton text={"Start Workout"} press={handlePress} />
      <RatingSlider />
      <WaterSlider />
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
