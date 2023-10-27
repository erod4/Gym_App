import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import NoAppleHealthData from "../components/molecules/NoAppleHealthData";
import Goal from "../components/molecules/Goal";
const Graph = ({
  dataSet,
  date,
  icon,
  goalName,
  count,
  units,
  percentage,
  navTo,
  open,
}) => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [chartWidth, setChartWidth] = useState(0);
  const [selectedDotIndex, setSelectedDotIndex] = useState(null);
  const handleTryAgain = () => {
    setRefreshCount(refreshCount + 1);
  };

  useEffect(() => {
    // Calculate the width based on the number of data points and available screen width
    const screenWidth = Dimensions.get("window").width;
    const numDataPoints = data.labels.length;
    const calculatedWidth = numDataPoints * 50; // Assuming 50 is the width of each data point
    setChartWidth(Math.max(calculatedWidth, screenWidth));
  }, []);
  const renderDotContent = ({ x, y, index }) => {
    if (index === selectedDotIndex) {
      return (
        <View
          style={{
            position: "absolute",
            left: x - 25,
            top: Dimensions.get("window").height / -12.5,
            zIndex: 2,
            height: 370,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0,0.3)",
              padding: 5,
              borderRadius: 5,
              justifyContent: "flex-start",
              alignItems: "center",
              width: 50,
              height: "100%",
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0,1)" }}>
              {dataSet[index].toFixed(1)}
            </Text>
            <Text style={{ color: "rgba(0, 0, 0,1)" }}>lb</Text>
          </View>
        </View>
      );
    }
    return null;
  };

  const handleDotPress = (data) => {
    setSelectedDotIndex(data.index);

    // Handle other actions related to dot press if needed
  };
  const data = {
    labels: date,
    datasets: [
      {
        data: dataSet,
      },
    ],
  };
  if (date.length === 0 || dataSet.length === 0) {
    return (
      <>
        <NoAppleHealthData onPress={handleTryAgain} />
      </>
    );
  }
  return (
    <>
      <ScrollView
        horizontal={true}
        style={{
          backgroundColor: "rgba(0, 119, 182, 0.1)",
          paddingHorizontal: 10,
          flex: 1,
          paddingVertical: 80,
        }}
        contentContainerStyle={{ alignItems: "flex-start" }}
        showsHorizontalScrollIndicator={false}
      >
        <LineChart
          data={data}
          width={chartWidth} // from react-native
          height={Dimensions.get("window").height * 0.4}
          yAxisLabel=""
          renderDotContent={renderDotContent}
          onDataPointClick={(data) => {
            handleDotPress(data);
          }}
          withHorizontalLines={true}
          withVerticalLines={false}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#1c1c1c",
            backgroundGradientFrom: "#0077b6",
            backgroundGradientFromOpacity: 0.0,
            backgroundGradientToOpacity: 0.0,
            backgroundGradientTo: "#0077b6",

            fillShadowGradientFrom: "#0077b6",
            fillShadowGradientTo: "#0077b6",
            fillShadowGradientFromOpacity: 0.0,
            fillShadowGradientToOpacity: 0.0,
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
            style: {
              fontWeight: "bold",
            },
            propsForLabels: { fontWeight: "900" },

            propsForDots: {
              r: "2",
              strokeWidth: "2",
              stroke: "#1c1c1c",
            },
          }}
          bezier
          style={{}}
        />
      </ScrollView>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,1)",
          flex: 1,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 20,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}
      >
        <Goal
          icon={icon}
          name={goalName}
          count={count}
          units={units}
          percentage={percentage}
          navTo={navTo}
          open={open}
        />
      </View>
    </>
  );
};

export default Graph;
