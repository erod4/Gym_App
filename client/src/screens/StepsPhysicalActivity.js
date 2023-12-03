import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { AppleHealthContext } from "../store/actions/clientActions/PhysicalActivity";
import NoAppleHealthData from "../components/molecules/NoAppleHealthData";
import AverageData from "../components/molecules/AverageData";
import Steps from "../containers/Steps";

const StepsPhysicalActivity = ({ route }) => {
  const { getDailyStepCount, dailySteps, getBMI, bmi } =
    useContext(AppleHealthContext);
  const { selected } = route.params || {};
  useEffect(() => {
    getDailyStepCount();
    getBMI();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      {dailySteps == null || dailySteps?.length <= 0 ? (
        <NoAppleHealthData data={"activity"} />
      ) : (
        <>
          {selected == "Steps" && <Steps />}
          {selected == "Water" && <View></View>}
          {selected == "Sleep" && <View></View>}
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({});
export default StepsPhysicalActivity;
