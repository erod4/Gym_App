import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

import {
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Barbell from "../components/atoms/Barbell";
import WeightSelection from "../components/atoms/WeightSelection";
import IncludeBarbell from "../components/atoms/IncludeBarbell";
import { useWeightSliderContext } from "../store/actions/clientActions/WeightSlider";

const slideUpValue = new Animated.Value(0);
const WeightDistrib = () => {
  const { closeWeightSlider, isWeightSliderActive } = useWeightSliderContext();
  const [includeBarbell, setIncludeBarbell] = useState(true);
  const handleBarbellSelection = () => {
    setIncludeBarbell(!includeBarbell);
  };
  const screenHeight = Dimensions.get("window").height;

  useEffect(() => {
    if (isWeightSliderActive) {
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
  }, [isWeightSliderActive, slideUpValue]);
  const slideUpAnimation = slideUpValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0 - screenHeight / 2, 0],
  });

  const [availableWeights, setAvailableWeights] = useState([
    45, 35, 25, 10, 5, 2.5,
  ]);
  const handleWeightSelected = (weight) => {
    if (availableWeights.includes(weight)) {
      const newWeights = availableWeights.filter(
        (newWeight) => newWeight !== weight
      );
      setAvailableWeights(newWeights.sort((a, b) => b - a));
    } else {
      setAvailableWeights([...availableWeights, weight].sort((a, b) => b - a));
    }
  };

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: slideUpAnimation,
        borderRadius: 15,
        height: screenHeight / 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
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
      <View style={styles.exit}>
        <TouchableOpacity
          style={styles.panelHandle}
          onPress={closeWeightSlider}
        >
          <FontAwesomeIcon
            size={25}
            icon={"fa-xmark"}
            style={{ color: "#1c1c1c" }}
          />
        </TouchableOpacity>
        <Text style={styles.weightSelectionText}>Select Available Weights</Text>
        <View style={styles.weightSelection}>
          <WeightSelection
            weight={45}
            handleWeightSelected={handleWeightSelected}
          />
          <WeightSelection
            weight={35}
            handleWeightSelected={handleWeightSelected}
          />
          <WeightSelection
            weight={25}
            handleWeightSelected={handleWeightSelected}
          />
          <WeightSelection
            weight={10}
            handleWeightSelected={handleWeightSelected}
          />
          <WeightSelection
            weight={5}
            handleWeightSelected={handleWeightSelected}
          />
          <WeightSelection
            weight={2.5}
            handleWeightSelected={handleWeightSelected}
          />
        </View>
        <Text style={styles.weightSelectionText}>Include Barbell</Text>
        <View style={styles.weightSelection}>
          <IncludeBarbell handleBarbellSelection={handleBarbellSelection} />
        </View>
      </View>

      <View style={styles.barbell}>
        <Barbell
          plateWeights={availableWeights}
          includeBarbell={includeBarbell}
        />
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  panelHandle: {
    width: 40,
    height: 5,

    marginBottom: 10,
    padding: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  exit: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  barbell: {
    flex: 1,
  },
  weightSelectionText: {
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
    color: "#1c1c1c",
  },
  weightSelection: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
export default WeightDistrib;
