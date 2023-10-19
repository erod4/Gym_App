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

const slideUpValue = new Animated.Value(0);
const WeightDistrib = ({ onClose, isVisible, weight }) => {
  const [includeBarbell, setIncludeBarbell] = useState(true);
  const handleBarbellSelection = () => {
    setIncludeBarbell(!includeBarbell);
  };
  const screenHeight = Dimensions.get("window").height;

  useEffect(() => {
    if (isVisible) {
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
      }).start(() => {
        onClose();
      });
    }
  }, [isVisible, onClose, slideUpValue]);
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
      }}
    >
      <View style={styles.exit}>
        <TouchableOpacity style={styles.panelHandle} onPress={onClose}>
          <FontAwesomeIcon
            size={25}
            icon={"fa-xmark"}
            style={{ color: "#FFF" }}
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
          <IncludeBarbell
            weight={45}
            handleBarbellSelection={handleBarbellSelection}
          />
        </View>
      </View>

      <View style={styles.barbell}>
        <Barbell
          plateWeights={availableWeights}
          totalWeight={weight}
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
    backgroundColor: "#1c1c1c",
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
    color: "#fff",
  },
  weightSelection: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
export default WeightDistrib;
