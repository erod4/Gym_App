import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
const IntensityContainer = () => {
  const [sliderVal, setSliderVal] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rate Workout Intensity</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={10}
        minimumTrackTintColor="orange"
        maximumTrackTintColor="#ddd"
        value={sliderVal}
        step={1}
        onValueChange={(value) => {
          setSliderVal(value);
        }}
      />
      <Text style={styles.intensity}>{sliderVal}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
  },
  intensity: {
    fontWeight: "500",
  },
});
export default IntensityContainer;
