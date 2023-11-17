import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import {
  LineChart,
} from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";

const MonthlyGraph = ({
  dataSet,
  date,
 setDate,
 setCurrWeight,
 setChange,


}) => {

  const [chartWidth, setChartWidth] = useState(0);
  const [selectedDotIndex, setSelectedDotIndex] = useState(null);



  const scrollViewRef = useRef(null);
  
  const handleScrollViewLayout = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  useEffect(() => {
    handleScrollViewLayout();
  }, []);
  useEffect(() => {
    // Calculate the width based on the number of data points and available screen width
    const screenWidth = Dimensions.get("window").width;
    const numDataPoints = data.labels.length;
    const calculatedWidth = numDataPoints * 80; // Assuming 50 is the width of each data point
    setChartWidth(Math.max(calculatedWidth, screenWidth));
    
  }, [dataSet]);

  const renderDotContent = ({ x, y, index }) => {
    if (index === selectedDotIndex) {
      return (
        <View
          key={index.toString()}
          style={{
            position: "absolute",
            left: x - 35,
            top: Dimensions.get("window").height / -12.5,
            zIndex: 2,
            height: 470,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0,0.3)",
              padding: 5,
              borderRadius: 5,
              justifyContent: "flex-start",
              alignItems: "center",
              width: 70,
              height: "100%",
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0,1)" }}>{dataSet[index]}</Text>
            <Text style={{ color: "rgba(0, 0, 0,1)" }}>lb</Text>
          </View>
        </View>
      );
    }
    return null;
  };

  const handleDotPress = (data) => {
    setSelectedDotIndex(data.index);
    setCurrWeight(dataSet[data.index]);
    setDate(date[data.index]);
    if (data.index > 0) {
      setChange(dataSet[data.index] - dataSet[data.index - 1]);
    } else {
      setChange(0);
    }

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


  return (
    <>
      <ScrollView
        horizontal={true}
        style={{
          backgroundColor: "rgba(0, 119, 182, 0.0)",
          paddingHorizontal: 10,
          flex: 1,
          paddingVertical: 80,
        }}
        contentContainerStyle={{
          alignItems: "flex-start",
        }}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onLayout={handleScrollViewLayout}
      >
        <LineChart
          data={data}
          width={chartWidth} // from react-native
          height={Dimensions.get("window").height * 0.55}
          yAxisLabel=""
          renderDotContent={renderDotContent}
          onDataPointClick={(data) => {
            handleDotPress(data);
          }}
          withHorizontalLines={true}
          withHorizontalLabels={false}
          withVerticalLines={false}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "#fff",
            backgroundGradientFromOpacity: 0.0,
            backgroundGradientToOpacity: 0.0,
            backgroundGradientTo: "#fff",

            fillShadowGradientFrom: "#fff",
            fillShadowGradientTo: "#fff",
            fillShadowGradientFromOpacity: 0.0,
            fillShadowGradientToOpacity: 0.0,
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
            style: {
              fontWeight: "bold",
            },
            propsForLabels: { fontWeight: "900", fontSize: 10 },

            propsForDots: {
              r: "2",
              strokeWidth: "3",
              stroke: "#1c1c1c",
            },
          }}
          bezier
          style={{}}
        />
      </ScrollView>
     
    </>
  );
};

export default MonthlyGraph;
