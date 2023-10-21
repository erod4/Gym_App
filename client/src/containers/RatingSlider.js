import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

import {
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRatingSliderContext } from "../store/actions/clientActions/RatingSlider";
import IntensityContainer from "../components/molecules/IntensityContainer";
import MoodContainer from "../components/molecules/MoodContainer";
import GenButton from "../components/atoms/GenButton";

const RatingSlider = ({ activeId }) => {
  const { isRatingSliderActive, closeRatingSlider } = useRatingSliderContext();

  const screenHeight = Dimensions.get("window").height;
  const slideUpValue = new Animated.Value(0);
  useEffect(() => {
    if (isRatingSliderActive) {
      Animated.timing(slideUpValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideUpValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isRatingSliderActive, slideUpValue]);
  const slideUpAnimation = slideUpValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0 - screenHeight / 2, 0],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: slideUpAnimation,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,

        height: screenHeight / 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -2, // This creates the shadow at the top
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android
      }}
    >
      <View style={styles.setting}>
        <Text style={styles.text}>How was your workout?</Text>
        <IntensityContainer />
        <MoodContainer />
      </View>
      <View style={styles.exit}>
        <GenButton
          onPress={closeRatingSlider}
          color={"#0077ff"}
          name={"Save"}
        />
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
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
  },
});
export default RatingSlider;
