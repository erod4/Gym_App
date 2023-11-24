import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SimpleAnimation } from "react-native-simple-animations";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const Welcome = ({ name }) => {
  const { isDarkMode } = useContext(AppearenceContext);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      display: showWelcome ? "flex" : "none",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 60,
      flexDirection: "column",
      zIndex: 1,
      borderRadius: 25,
      height: showWelcome ? "13%" : "5%",
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      shadowColor: showWelcome ? "#000" : "#fff",
      shadowOffset: { width: 0, height: -2 }, // Set the shadow offset to move the shadow upwards (negative height)
      shadowOpacity: 0.8, // Set the shadow opacity
      shadowRadius: 2, // Set the shadow radius
      padding: 6,
    },
    insideContainer: {
      flex: 1,
      justifyContent: "center",
    },
    message: {
      fontWeight: "700",
      fontSize: 18,
      color: isDarkMode ? "#ddd" : "#000",
    },
  });

  return (
    <SimpleAnimation
      delay={300}
      duration={1000}
      fade
      staticType="zoom"
      style={styles.container}
    >
      <View style={styles.insideContainer}>
        <Text style={styles.message}>Welcome Back {name} 🥳</Text>
      </View>
    </SimpleAnimation>
  );
};

export default Welcome;
