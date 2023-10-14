import React from "react";
import Widget from "../atoms/Widget";
import Progress from "../atoms/Progress";
import { StyleSheet, View } from "react-native";

function FullWidget({ name, icon, data, percent }) {
  return (
    <>
      <View style={styles.container}>
        <Progress
          innerColor={"#0077B6"}
          innerText={"Calories"}
          innerTextColor={"#fff"}
          innerIcon={icon}
          innerData={data}
          percentage={percent}
          strokeWidth={10}
          color="#007AFF"
          bgColor="#ddd"
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
export default FullWidget;
