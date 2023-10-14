import { View, Text, Dimensions } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
const Graph = ({ title }) => {
  const line = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: title,
        data: [1500, 2200, 2000, 2000, 2000, 2000, 2000],
        strokeWidth: 2,
      },
    ],
  };
  return (
    <>
      <LineChart
        data={line}
        width={Dimensions.get("window").width} // from react-native
        height={300}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(0, 119, 182, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 119, 182, ${opacity})`,
          style: {
            padding: 20,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#eee",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10,
          width: "100%",
        }}
        fromZero={true}
      />
    </>
  );
};

export default Graph;
