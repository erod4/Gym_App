import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";
import ToggleButton from "../components/atoms/ToggleButton";
import Graph from "../containers/Graph";
import { useHealth } from "../store/actions/clientActions/AppleHealth";
import moment from "moment";
import WeeklyGraph from "../containers/WeeklyGraph";
import MonthlyGraph from "../containers/MonthlyGraph";
const StepsPhysicalActivity = () => {
  const { weight, stepCount } = useHealth();

  const [dayView, setDayView] = useState(true);
  const [weekView, setWeekView] = useState(false);
  const [monthView, setMonthView] = useState(false);
  const handleDayViewPress = () => {
    setDayView(true);
    setWeekView(false);
    setMonthView(false);
  };
  const handleWeekViewPress = () => {
    setDayView(false);
    setWeekView(true);
    setMonthView(false);
  };
  const handleMonthViewPress = () => {
    setDayView(false);
    setWeekView(false);
    setMonthView(true);
  };
  //get dates from step Count array
  const combinedSteps = {};
  const dateTime = [];
  stepCount.forEach((step) => {
    // Extract the date from the startDate
    const date = step.startDate.split("T")[0];

    // If the date is not already in the combinedSteps object, create a new entry
    if (!combinedSteps[date]) {
      combinedSteps[date] = 0;
    }

    // Add the steps for the current entry to the existing total steps for the day
    combinedSteps[date] += step.value;
  });
  const dates = Object.keys(combinedSteps).reverse();
  const data = Object.values(combinedSteps).reverse();

  const formattedDates = dates.map((date) => {
    const month = date.split("-")[1];
    const day = date.split("-")[2];

    return `${month}/${day}`;
  });
  const formattedData = data.map((data) => {
    return Math.floor(data);
  });

  //weekly data grouping
  const groupedDataByWeek = (data) => {
    const groupedData = {};
    stepCount.forEach((item) => {
      const weekNumber = moment(item.startDate).isoWeek();
      const weekYear = moment(item.startDate).isoWeekYear();
      const key = `${weekYear} ${weekNumber}`;
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(item.value);
    });
    return groupedData;
  };
  const groupedWeekWeightData = groupedDataByWeek(stepCount);
  const weeks = Object.keys(groupedWeekWeightData);
  const weeklyData = Object.values(groupedWeekWeightData);
  const formattedWeeks = weeks.map((weekNumber) => {
    const year = weekNumber.split(" ")[0];
    const weekNum = weekNumber.split(" ")[1];

    const januaryFirst = new Date(Number(year), 0, 1);

    const daysToFirstSunday = 7 - januaryFirst.getDay();
    const firstSunday = new Date(Number(year), 0, daysToFirstSunday + 1);

    const daysToTargetWeek = (Number(weekNum) - 2) * 7;

    const startDate = new Date(
      firstSunday.getFullYear(),
      firstSunday.getMonth(),
      firstSunday.getDate() + daysToTargetWeek
    );

    const endDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + 6
    );

    return `${startDate.getMonth() + 1}/${startDate.getDate()}-${
      endDate.getMonth() + 1
    }/${endDate.getDate()}`;
  });
  const avgWeeklyData = weeklyData.map((data) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i];
    }
    const avg = total / data.length;
    return avg.toFixed(1);
  });
  //monthly data grouping
  const groupedDataByMonth = (data) => {
    const groupedData = {};
    //loop through data and sort data by month and year (key is month year and value is the stepCount)
    stepCount.forEach((item) => {
      const monthLabels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthNumber = new Date(item.startDate).getMonth() + 1;
      const year = new Date(item.startDate).getFullYear();
      const key = `${monthLabels[monthNumber - 1]} ${year % 100}`;
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(item.value);
    });
    return groupedData;
  };
  const groupedMonthData = groupedDataByMonth(stepCount);
  //get dates from monthly data
  const months = Object.keys(groupedMonthData);
  const monthlyData = Object.values(groupedMonthData);
  const avgMonthlyData = monthlyData.map((item) => {
    let total = 0;

    for (let i = 0; i < item.length; i++) {
      total += item[i];
    }

    const avg = total / item.length;

    return avg.toFixed(1);
  });

  return (
    <View style={{ flex: 1 }}>
      {stepCount.length > 0 && (
        <View style={styles.toggleContainer}>
          <ToggleButton
            title={"Day"}
            onPress={handleDayViewPress}
            active={dayView}
          />
          <ToggleButton
            title={"Week"}
            onPress={handleWeekViewPress}
            active={weekView}
          />
          <ToggleButton
            title={"Month"}
            onPress={handleMonthViewPress}
            active={monthView}
          />
        </View>
      )}

      {dayView && (
        <>
          <Graph
            date={formattedDates}
            dataSet={formattedData}
            units={"steps"}
            icon={"fa-shoe-prints"}
            noData={"Steps"}
          />
        </>
      )}
      {weekView && (
        <WeeklyGraph
          date={formattedWeeks.reverse()}
          dataSet={avgWeeklyData.reverse()}
          icon={"fa-weight-scale"}
          goalName={"Weight"}
          units={"lb"}
          noData={"Weight"}
          formattedTime={formattedDateTime}
        />
      )}
      {monthView && (
        <MonthlyGraph
          date={months}
          dataSet={avgMonthlyData}
          icon={"fa-weight-scale"}
          goalName={"Weight"}
          units={"lb"}
          noData={"Weight"}
          formattedTime={formattedDateTime}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  toggleContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
export default StepsPhysicalActivity;
