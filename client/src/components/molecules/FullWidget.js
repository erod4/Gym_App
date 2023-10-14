import React from "react";
import Widget from "../atoms/Widget";
import Progress from "../atoms/Progress";
import { StyleSheet, View } from "react-native";

function FullWidget({ name, icon, data, percent }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.widget}>
          <Widget name={name} icon={icon} data={data} />
        </View>
        <View style={styles.progress}>
          <Progress
            percentage={percent}
            radius={50}
            strokeWidth={10}
            color="#007AFF"
            bgColor="#ddd"
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  widget: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -40 }, { translateY: -47 }], // Adjust these values based on your widget size
  },
  progress: {
    position: "relative",
  },
});
export default FullWidget;
