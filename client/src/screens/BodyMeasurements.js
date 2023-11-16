import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { AppleHealthContext } from "../store/actions/clientActions/PhysicalActivity";
import NoAppleHealthData from "../components/molecules/NoAppleHealthData";
import AverageData from "../components/molecules/AverageData";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import WeightBM from "../containers/WeightBM";
const BodyMeasurements = ({ route }) => {
  const { getWeight, weight } = useContext(AppleHealthContext);

  const { selected } = route.params || {};
  useEffect(() => {
    getWeight();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      {weight?.length === 0 || weight === null || weight == undefined ? (
        <NoAppleHealthData data={"Weight"} />
      ) : (
        <>
          {selected == "Weight" && <WeightBM />}
          {selected == "BMI" && <View></View>}
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({});
export default BodyMeasurements;
