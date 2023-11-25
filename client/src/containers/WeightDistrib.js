import { View, Text, Button, Pressable } from "react-native";
import React, { useContext, useState } from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Barbell from "../components/atoms/Barbell";
import WeightSelection from "../components/atoms/WeightSelection";
import IncludeBarbell from "../components/atoms/IncludeBarbell";
import { InteractionContext } from "../store/actions/clientActions/Interaction";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const WeightDistrib = () => {
  const { setActive, id } = useContext(InteractionContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const [includeBarbell, setIncludeBarbell] = useState(true);
  const [availableWeights, setAvailableWeights] = useState([
    45, 35, 25, 10, 5, 2.5,
  ]);

  const handleBarbellSelection = () => {
    setIncludeBarbell(!includeBarbell);
  };

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
    panelHandle: {
      paddingHorizontal: 5,
      position: "absolute",
      top: 5,
      right: 5,
      zIndex: 1,
    },
    exit: {
      alignItems: "flex-end",
      paddingHorizontal: 10,
      overflow: "hidden",
      borderTopEndRadius: 15,
      borderTopStartRadius: 15,
    },
    barbell: {
      width: "100%",
    },
    weightSelectionText: {
      width: "100%",
      padding: 10,
      textAlign: "center",
      fontWeight: "500",
      fontSize: 15,
      color: isDarkMode ? "#ddd" : "#000",
    },
    weightSelection: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
    },
  });
  return (
    <Pressable
      style={styles.page}
      onPress={() => {
        setActive("");
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={styles.panelHandle}
            onPress={() => {
              setActive("");
            }}
          >
            <FontAwesomeIcon
              size={20}
              icon={"fa-xmark"}
              style={{ color: isDarkMode ? "#ddd" : "#000" }}
            />
          </TouchableOpacity>
          <Text style={styles.weightSelectionText}>
            Select Available Weights
          </Text>
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

        <Barbell
          plateWeights={availableWeights}
          includeBarbell={includeBarbell}
        />
      </View>
    </Pressable>
  );
};

export default WeightDistrib;
