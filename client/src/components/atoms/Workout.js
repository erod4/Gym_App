import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
const Workout = ({ title, day, time, linkTo, id, name }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(linkTo, { id, name });
  };
  const renderRightActions = () => (
    <View style={styles.optionsContainer}>
      <TouchableOpacity style={styles.leftAction}>
        <FontAwesomeIcon style={styles.actionText} icon={"fa-trash-can"} />
      </TouchableOpacity>
    </View>
  );

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
              style={{ color: "#0077B6" }}
            />
            <Text style={styles.details}>{day}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <FontAwesomeIcon icon={"fa-clock"} style={{ color: "#0077B6" }} />
            <Text style={styles.details}>{time} min</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  workout: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  title: {
    padding: 10,
    fontSize: 30,
    fontWeight: "900",

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
    color: "#0077B6",
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
export default Workout;
