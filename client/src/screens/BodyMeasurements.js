import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import ToggleButton from "../components/atoms/ToggleButton";
import Graph from "../containers/Graph";
import { useHealth } from "../store/actions/clientActions/AppleHealth";
const BodyMeasurements = () => {
  const { weight } = useHealth();
  const [dayView, setDayView] = useState(true);
  const [monthView, setMonthView] = useState(false);
  const [yearView, setYearView] = useState(false);
  const handleDayViewPress = () => {
    setDayView(true);
    setMonthView(false);
    setYearView(false);
  };
  const handleMonthViewPress = () => {
    setDayView(false);
    setMonthView(true);
    setYearView(false);
  };
  const handleYearViewPress = () => {
    setDayView(false);
    setMonthView(false);
    setYearView(true);
  };
  //get dates from weight array
  const uniqueDates = {};
  weight.forEach((item) => {
    const { startDate, value } = item;
    const dateKey = startDate.split("T")[0];
    if (!uniqueDates[dateKey] || uniqueDates[dateKey].startDate < startDate) {
      uniqueDates[dateKey] = value;
    }
  });
  const weights = Object.values(uniqueDates);
  const formattedWeights = weights.reverse();
  const dates = Object.keys(uniqueDates);
  const formattedDates = dates.reverse().map((dateString) => {
    const date = new Date(dateString);

    const month = date.getMonth() + 1;

    const day = date.getDate() + 1;
    return `${month}/${day}`;
  });

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0, 119, 182, 0.5)" }}>
      <View style={styles.toggleContainer}>
        <ToggleButton title={"Day"} onPress={handleDayViewPress} />
        <ToggleButton title={"Month"} onPress={handleMonthViewPress} />
        <ToggleButton title={"Year"} onPress={handleYearViewPress} />
      </View>

      {dayView && (
        <Graph
          date={formattedDates}
          dataSet={formattedWeights}
          icon={"fa-weight-scale"}
          goalName={"Weight"}
          units={"lb"}
          count={210}
          percentage={(193 - 180) / (210 - 180)}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  toggleContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
export default BodyMeasurements;
