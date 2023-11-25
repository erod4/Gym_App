import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";
const NutritionNav = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
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

  const formatDate = (d) => {
    const currdate = new Date();
    const currMonth = currdate.getMonth();
    const currDay = currdate.getDate();
    const month = months[d.getMonth()];
    const day = d.getDate();

    if (currMonth === d.getMonth() && currDay === day) {
      return "Today";
    }
    return `${month} ${day}`;
  };

  useEffect(() => {
    setFormattedDate(formatDate(currentDate));
  }, [currentDate]);

  const handleLeftArrowPress = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleRightArrowPress = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const [formattedDate, setFormattedDate] = useState(formatDate(currentDate));

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      paddingTop: 20,

      justifyContent: "flex-start",
      alignItems: "center",
    },
    arrow: {
      paddingHorizontal: 15,
    },
    date: {
      fontSize: 22,
      fontWeight: "900",
      color: isDarkMode ? "#ddd" : "#000",
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLeftArrowPress} style={styles.arrow}>
        <FontAwesomeIcon
          icon={"fa-arrow-left"}
          size={20}
          color={isDarkMode ? "#ddd" : "#000"}
        />
      </TouchableOpacity>
      <Text style={styles.date}>{formattedDate}</Text>
      <TouchableOpacity onPress={handleRightArrowPress} style={styles.arrow}>
        <FontAwesomeIcon
          icon={"fa-arrow-right"}
          size={20}
          color={isDarkMode ? "#ddd" : "#000"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NutritionNav;
