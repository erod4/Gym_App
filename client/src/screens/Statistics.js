import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Statistic from "../components/atoms/Statistic";

const Statistics = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Statistics</Text>
      <ScrollView
        contentContainerStyle={styles.scroll}
        style={styles.container}
      >
        <Statistic
          name={"Weightlifting Progress"}
          linkTo={"WeightProgress"}
          icon={"weight-pound"}
        />
        <Statistic name={"Caloric Intake"} icon={"food-apple"} />
        <Statistic
          name={"Body Measurements"}
          linkTo={"BodyMeasur"}
          icon={"human-male-height"}
        />
        <Statistic
          name={"Steps & Physical Activity"}
          linkTo={"PhysicalActivity"}
          icon={"fitness"}
          ionic={true}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    paddingTop: 60,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    width: "90%",
  },
  scroll: {
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    padding: 10,
  },
});
export default Statistics;
