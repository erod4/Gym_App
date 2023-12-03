import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import Slider from "@react-native-community/slider";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";
const IntensityContainer = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const [sliderVal, setSliderVal] = useState(1);
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 15,
      fontWeight: "700",
      color: isDarkMode ? "#fff" : "#000",
    },
    intensity: {
      fontWeight: "500",
      color: isDarkMode ? "#fff" : "#000",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rate Workout Intensity</Text>
      <Slider
        thumbTintColor={isDarkMode ? "#192734" : "#fff"}
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={10}
        minimumTrackTintColor="rgb(0, 84, 181)"
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

export default IntensityContainer;
