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
  faAppleWhole,
  faArrowLeft,
  faArrowRight,
  faPlus,
  faMagnifyingGlass,
  faBarcode,
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
import RatingSlider from "../containers/RatingSlider";
import WaterSlider from "../containers/WaterSlider";
import { AppleHealthContext } from "../store/actions/clientActions/PhysicalActivity";
import WorkoutPaused from "../components/molecules/WorkoutPaused";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
const Home = () => {
  const { isDarkMode } = useContext(AppearenceContext);

  const { appleHealthPermissionGranted, requestPermissions } =
    useContext(AppleHealthContext);
  const { isResumeActive } = useContext(AppearenceContext);
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
    faMoon,
    faAppleWhole,
    faArrowLeft,
    faArrowRight,
    faPlus,
    faMagnifyingGlass,
    faBarcode,
    faCircleXmark
  );
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      height: "100%",
      backgroundColor: !isDarkMode ? "#fff" : "#192734",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",

      paddingTop: 50,
      gap: 5,
    },
  });
  return (
    <View style={styles.container}>
      <Welcome name={"Enrique"} />
      <DailyGoals />
      <RecentWorkouts />
      <StartButton
        text={"Start Workout"}
        press={handlePress}
        backgroundColor={"#0096c7"}
        fontColor={"#fff"}
      />
      {isResumeActive && <WorkoutPaused />}
      <RatingSlider />
      <WaterSlider />
    </View>
  );
};

export default Home;
