import { View, Text, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import {
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";

import IntensityContainer from "../components/molecules/IntensityContainer";
import MoodContainer from "../components/molecules/MoodContainer";
import GenButton from "../components/atoms/GenButton";
import { HomeScreenContext } from "../store/actions/clientActions/HomeScreen";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const RatingSlider = ({ activeId }) => {
  const { isDarkMode } = useContext(AppearenceContext);
  const { setActive } = useContext(HomeScreenContext);
  const screenHeight = Dimensions.get("window").height;
  const slideUpValue = new Animated.Value(0);
  const styles = StyleSheet.create({
    page: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      flex: 1,
      position: "relative",
      ...StyleSheet.absoluteFillObject,
      zIndex: 10,
      flexDirection: "column",
    },
    container: {
      borderRadius: 10,
      padding: 10,
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      alignItems: "center",
      width: "90%",
      height: "45%",
    },
    exit: {
      padding: 10,
      alignItems: "center",
    },
    setting: {
      paddingTop: 20,
      paddingBottom: 40,
      width: "100%",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
    },
    panelHandle: {
      padding: 20,
    },
    text: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: 18,
      fontWeight: "700",
      color: isDarkMode ? "#fff" : "#000",
    },
  });

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.setting}>
          <Text style={styles.text}>How was your workout?</Text>
          <IntensityContainer />
          <MoodContainer />
        </View>
        <View style={styles.exit}>
          <GenButton
            onPress={() => {
              setActive("");
            }}
            color={"rgba(0, 150, 199, 0.25)"}
            name={"Save"}
            fontColor={"#0096c7"}
          />
        </View>
      </View>
    </View>
  );
};
export default RatingSlider;
