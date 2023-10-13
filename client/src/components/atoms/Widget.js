import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const Widget = ({ name, icon, data }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.data}>
          <FontAwesomeIcon icon={icon} style={styles.dataText} />
          <Text style={styles.dataText}>{data}</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0077b6",

    width: 90,
    height: 90,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  name: {
    fontSize: 20,
    fontWeight: "900",
    color: "#eee",
  },
  data: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  dataText: {
    color: "#eee",
    fontWeight: "600",
    fontSize: 15,
  },
});
export default Widget;
