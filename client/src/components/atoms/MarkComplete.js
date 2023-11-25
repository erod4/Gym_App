import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { trigger } from "react-native-haptic-feedback";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const MarkComplete = ({ markComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { isDarkMode } = useContext(AppearenceContext);
  const handleCheckPress = () => {
    trigger("notificationSuccess");
    setIsComplete(!isComplete);
  };
  const styles = StyleSheet.create({
    completeContainer: {
      borderColor: isDarkMode ? "#aaa" : "#000",
      backgroundColor: isDarkMode && "#FFF",
      borderRadius: 100,
      borderWidth: 1.5,
      height: 20,
      width: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <TouchableOpacity
      style={styles.completeContainer}
      onPress={handleCheckPress}
    >
      {isComplete ? <FontAwesomeIcon icon={"fa-check"} color="green" /> : <></>}
    </TouchableOpacity>
  );
};

export default MarkComplete;
