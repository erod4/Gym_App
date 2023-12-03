import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import Statistic from "../components/atoms/Statistic";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const Statistics = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    page: {
      paddingTop: 60,
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: !isDarkMode ? "#fff" : "#192734",
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
      color: !isDarkMode ? "#000" : "#ddd",
    },
  });

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
          icon={"fitness"}
          ionic={true}
        />
        <Statistic
          name={"Body Measurements"}
          linkTo={"BodyMeasur"}
          icon={"human-male-height"}
          mci={true}
        />
        <Statistic
          name={"Steps & Physical Activity"}
          linkTo={"PhysicalActivity"}
          icon={"fa-heart-pulse"}
          fa={true}
        />
      </ScrollView>
    </View>
  );
};
export default Statistics;
