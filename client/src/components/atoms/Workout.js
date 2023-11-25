import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { save } from "../../../Storage";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";
const Workout = ({ title, day, time, linkTo, id, name }) => {
  const { isDarkMode } = useContext(AppearenceContext);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(linkTo, { id, name, isDarkMode });
    save("id", id);
  };
  const renderRightActions = () => (
    <View style={styles.optionsContainer}>
      <TouchableOpacity style={styles.leftAction}>
        <FontAwesomeIcon style={styles.actionText} icon={"fa-trash-can"} />
      </TouchableOpacity>
    </View>
  );
  const styles = StyleSheet.create({
    workout: {
      width: "100%",
      height: 100,
      borderRadius: 10,
      backgroundColor: isDarkMode ? "#253341" : "#fff",
      flexDirection: "column",
      borderWidth: 0.5,
      borderColor: isDarkMode ? "#ddd" : "#000",
    },
    title: {
      padding: 10,
      fontSize: 30,
      fontWeight: "900",
      color: isDarkMode ? "#ddd" : "#000",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    detailsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    details: {
      fontWeight: "900",
      padding: 10,
      color: isDarkMode ? "#fff" : "#999",
      fontSize: 15,
    },
    optionsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 100,
    },
    leftAction: {
      padding: 20,
      backgroundColor: "red",
      height: 100,
      justifyContent: "center",
      alignItems: "center",
    },

    actionText: {
      fontSize: 13,
      color: "#fff",
      fontWeight: "700",
    },
  });
  return (
    <Swipeable
      overshootRight={false}
      overshootLeft={false}
      renderRightActions={renderRightActions}
    >
      <TouchableOpacity style={styles.workout} onPress={handlePress}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsContainer}>
            <FontAwesomeIcon
              icon={"fa-calendar"}
              style={{ color: isDarkMode ? "#ddd" : "#555" }}
            />
            <Text style={styles.details}>{day}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <FontAwesomeIcon
              icon={"fa-clock"}
              style={{ color: isDarkMode ? "#ddd" : "#555" }}
            />
            <Text style={styles.details}>{time} min</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default Workout;
