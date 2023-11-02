import { View, Text, StyleSheet, Dimensions } from "react-native";

import React, { useContext } from "react";
import { useHealth } from "../store/actions/clientActions/AppleHealth";
import Swiper from "react-native-swiper";
import Goal from "../components/molecules/Goal";
import { RatingSliderContext } from "../store/actions/clientActions/RatingSlider";

const DailyGoals = () => {
  const { dailyStepCount } = useHealth();
  const { openWaterSlider } = useContext(RatingSliderContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todays Goals</Text>
      <Swiper
        style={styles.swiper}
        paginationStyle={styles.paginationContainer}
        showsButtons={false}
        loop={true}
      >
        <View style={styles.goals}>
          <Goal
            icon={"fa-droplet"}
            name={"Water"}
            units={"Oz"}
            count={10}
            percentage={10}
            open={openWaterSlider}
          />
          <Goal
            icon={"fa-fire-flame-curved"}
            name={"Calories"}
            units={"KCal"}
            count={2000}
            percentage={1}
          />
        </View>

        <View style={styles.goals}>
          <Goal
            icon={"fa-bed"}
            name={"Sleep"}
            units={"Hr"}
            count={8}
            percentage={1}
          />
          <Goal
            icon={"fa-shoe-prints"}
            name={"Steps"}
            units={"Steps"}
            count={dailyStepCount?.value}
            percentage={dailyStepCount?.value / 8000}
          />
        </View>
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  paginationContainer: {
    position: "relative",
    bottom: -10, // Adjust the top value as needed to position the dots
    width: "100%",
    alignItems: "center",
  },
  container: {
    alignContent: "center",
    justifyContent: "center",
    width: "90%",
    flex: 1,

    borderRadius: 10,
  },

  title: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "left",
    padding: 10,
    fontSize: 20,
    fontWeight: "900",
  },
  goals: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default DailyGoals;
