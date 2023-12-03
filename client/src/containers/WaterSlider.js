import { View, Text, Button, Pressable } from "react-native";
import React, { useContext, useEffect, useMemo, useState } from "react";

import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
useMemo;
import WaterBottle from "./WaterBottle";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";
import { HomeScreenContext } from "../store/actions/clientActions/HomeScreen";
const WaterSlider = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const { setActive } = useContext(HomeScreenContext);
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
      height: "50%",
    },

    setting: {
      paddingTop: 40,
      width: "100%",

      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          Log Your Water
        </Text>
        <View style={styles.setting}>
          <WaterBottle />
        </View>
        <Pressable
          onPress={() => {
            setActive("");
          }}
          style={{
            paddingHorizontal: 5,
            position: "absolute",
            top: 5,
            right: 5,
            zIndex: 1,
          }}
        >
          <FontAwesomeIcon
            icon={"fa-xmark"}
            size={20}
            color={isDarkMode ? "#ddd" : "#000"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default WaterSlider;
