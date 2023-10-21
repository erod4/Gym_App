import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const MarkComplete = ({ markComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleCheckPress = () => {
    setIsComplete(!isComplete);
  };

  return (
    <TouchableOpacity
      style={styles.completeContainer}
      onPress={handleCheckPress}
    >
      {isComplete ? <FontAwesomeIcon icon={"fa-check"} color="green" /> : <></>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  completeContainer: {
    borderRadius: 100,
    borderWidth: 1.5,
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MarkComplete;
