import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Incrementer = () => {
  const [weight, setWeight] = useState("190.2");
  const increment = () => {
    const newWeight = Number(weight);
    setWeight(String(newWeight + 1));
  };
  const decrement = () => {
    const newWeight = Number(weight);
    if (newWeight <= 0) {
      setWeight(String(Math.max(0, newWeight - 1)));
    } else {
      setWeight(String(newWeight - 1));
    }
  };

  const handleWeightChange = (text) => {
    setWeight(text);
  };
  return (
    <View style={styles.editProfileContainer}>
      <View style={styles.weightGaolContainer}>
        <View style={styles.weightGaolContainerLeft}>
          <TextInput
            placeholder="190.2"
            value={weight}
            onChangeText={handleWeightChange}
            style={{ flex: 1, fontWeight: "700", color: "#0077b6" }}
          />
          <Text style={{ fontWeight: "500", color: "#111" }}> Lbs</Text>
        </View>
        <View style={styles.weightGaolContainerRight}>
          <TouchableOpacity onPress={increment} style={styles.button}>
            <FontAwesomeIcon icon={"fa-chevron-up"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement}>
            <FontAwesomeIcon icon={"fa-chevron-down"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  weightGaolContainer: {
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    gap: 10,
    width: 115,
  },
  weightGaolContainerLeft: {
    flexDirection: "row",
    flex: 1,
  },
  weightGaolContainerRight: {
    alignItems: "center",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
});
export default Incrementer;
