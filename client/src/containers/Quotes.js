import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Swiper from "react-native-swiper";
const Quotes = () => {
  return (
    <View style={styles.view}>
      <Swiper style={styles.container} showsButtons={false} loop={false}>
        <View style={styles.slide}>
          <Text style={styles.text}>
            I'm not superstitious but I am a little stitious- Micheal Scott
          </Text>
        </View>
        <View style={styles.slide}>
          <Text>Goodbye</Text>
        </View>
        <View style={styles.slide}>
          <Text>Hello</Text>
        </View>
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: "90%",
    height: 350,
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
  },
});
export default Quotes;
