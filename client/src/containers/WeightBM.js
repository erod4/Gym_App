import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AppleHealthContext } from "../store/actions/clientActions/PhysicalActivity";
import NoAppleHealthData from "../components/molecules/NoAppleHealthData";
import AverageData from "../components/molecules/AverageData";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  dailyWeight,
  weeklyWeight,
} from "../store/actions/clientActions/WeightHelper";
import Graph from "./Graph";
import BMWeightGaol from "../components/molecules/BMWeightGaol";

const WeightBM = () => {
  const { getWeight, weight } = useContext(AppleHealthContext);
  const [formattedDailyDates, formattedDailyWeights, formattedDailyTimes] =
    dailyWeight(weight);

  const { formattedWeeklyWeights, formattedWeeklyDates } = weeklyWeight(weight);
  //* retrieves data from graph when a dot is pressed and displays it to user
  const [time, setTime] = useState(null);
  const [currweight, setCurrWeight] = useState(null);
  const [change, setChange] = useState(null);
  //*
  useEffect(() => {
    getWeight();
  }, []);
  //!

  //!
  const [page, setPage] = useState("Daily");

  const handleSelect = (selectedItem, indx) => {
    setPage(selectedItem);
  };
  const dropDownButton = (selectedItem, index) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.dropDownSelectionText}>{selectedItem}</Text>
        <FontAwesomeIcon icon={"fa-chevron-down"} color="#999" />
      </View>
    );
  };
  const target1 = ["Daily", "Weekly", "Monthly"];

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      {page == "Daily" && (
        <Graph
          dataSet={formattedDailyWeights}
          date={formattedDailyDates}
          formattedTime={formattedDailyTimes}
          setTime={setTime}
          setCurrWeight={setCurrWeight}
          setChange={setChange}
        />
      )}
      {page == "Weekly" && (
        <View>
          <Text>Weekly</Text>
        </View>
      )}
      {page == "Monthly" && (
        <View>
          <Text>Monthly</Text>
        </View>
      )}
      <View style={styles.displayContainer}>
        <SelectDropdown
          buttonStyle={styles.dropDown}
          data={target1}
          showsVerticalScrollIndicator={false}
          renderCustomizedButtonChild={dropDownButton}
          defaultValueByIndex={0}
          dropdownStyle={styles.dropDownOptionsContainer}
          onSelect={handleSelect}
        />
        {page == "Daily" && (
          <AverageData time={time} currData={currweight} change={change} />
        )}
        {page == "Weekly" && <AverageData />}
        {page == "Monthly" && <AverageData />}
        <BMWeightGaol radius={80} progress={100} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  displayContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    height: "35%",
  },

  dropDown: {
    backgroundColor: "transparent",
  },
  dropDownOptionsContainer: {
    position: "absolute",
    top: "100%", // Position the dropdown below the dropdown button
    transform: [{ translateY: 0 }],
    borderRadius: 10,
  },

  dropDownSelectionText: {
    color: "#111",
    fontWeight: "700",
    fontSize: 18,
  },
});
export default WeightBM;
