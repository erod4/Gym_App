import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const AverageData = ({ currData, change, date, time, icon, units }) => {
  return (
    <>
      {currData ? (
        <View style={styles.container}>
          <View style={styles.containerLeft}>
            <Text style={styles.containerLeftData}>{currData}</Text>
            <Text style={styles.containerLeftUnits}>{units}</Text>
          </View>
          <View style={styles.containerRight}>
            <View style={styles.containerRightUpper}>
              <FontAwesomeIcon icon={"fa-arrow-up"} size={18} color="#0077b6" />
              <Text style={styles.containerRightUpperChange}>
                {change ? change.toFixed(1) : 0} {units}
              </Text>
            </View>
            {time ? (
              <View style={styles.containerRightLower}>
                <FontAwesomeIcon icon={"fa-clock"} size={15} color="#999" />
                <Text style={styles.containerRightLowerValue}>{time}</Text>
              </View>
            ) : (
              <View style={styles.containerRightLower}>
                <FontAwesomeIcon icon={"fa-calendar"} size={15} color="#999" />
                <Text style={styles.containerRightLowerValue}>{date}</Text>
              </View>
            )}
          </View>
        </View>
      ) : (
        <>
          <View style={[styles.container, { justifyContent: "center" }]}>
            <Text>Select a Data Point To See Detailed Info</Text>
          </View>
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: "100%",
  },
  containerLeft: {
    flexDirection: "row",
    alignItems: "flex-end",

    gap: 5,
  },
  containerLeftData: {
    fontSize: 25,
    fontWeight: "700",
  },
  containerLeftUnits: {
    color: "#0077b6",
    fontWeight: "700",
    paddingBottom: 2,
  },
  containerRight: { flexDirection: "column", gap: 5 },
  containerRightUpper: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerRightUpperChange: {
    fontWeight: "700",
  },
  containerRightLowerValue: { fontWeight: "500", color: "#999" },
  containerRightLower: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
export default AverageData;
