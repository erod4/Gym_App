import { View, Text, StyleSheet, Dimensions } from "react-native";

import React, { useContext, useEffect } from "react";

import Swiper from "react-native-swiper";
import Goal from "../components/molecules/Goal";
import { HomeScreenContext } from "../store/actions/clientActions/HomeScreen";
import { AppleHealthContext } from "../store/actions/clientActions/PhysicalActivity";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";
const DailyGoals = () => {
  const { todaysSteps, getTodaysStep } = useContext(AppleHealthContext);
  const { isDarkMode } = useContext(AppearenceContext);
  useEffect(() => {
    getTodaysStep();
  }, []);

  const { setActive } = useContext(HomeScreenContext);
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
      paddingTop: 10,
      fontSize: 20,
      fontWeight: "900",
      color: !isDarkMode ? "#000" : "#ddd",
    },
    goals: {
      flexDirection: "row",
      marginBottom: 5,
      padding: 10,
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todays Goals</Text>
      <Swiper
        style={{}}
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
            open={() => {
              setActive("WATER");
            }}
            color={"#52A8E7"}
          />
          <Goal
            icon={"fa-fire-flame-curved"}
            name={"Calories"}
            units={"KCal"}
            count={2000}
            percentage={1}
            color={"#EE6026"}
          />
        </View>

        <View style={styles.goals}>
          <Goal
            icon={"fa-moon"}
            name={"Sleep"}
            units={"Hr"}
            count={8}
            percentage={1}
            color={"#C6B868"}
          />
          <Goal
            icon={"fa-shoe-prints"}
            name={"Steps"}
            units={"Steps"}
            count={todaysSteps ? todaysSteps?.value : 0}
            percentage={todaysSteps?.value / 8000}
          />
        </View>
      </Swiper>
    </View>
  );
};
export default DailyGoals;
