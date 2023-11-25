import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";
const EditSet = ({ setName, weight, time }) => {
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    set: {
      width: "90%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: "center",
      gap: 30,
    },
    reps: {
      flexDirection: "column",
      alignItems: "center",
    },
    setName: {
      fontWeight: "900",
      color: isDarkMode ? "#ddd" : "#000",
    },
    counts: {
      fontSize: 20,
      color: isDarkMode ? "#ddd" : "#000",
      fontWeight: "500",

      borderRadius: 10,
      width: 45,
      textAlign: "center",
      borderWidth: 1,
      borderColor: isDarkMode ? "#ddd" : "#000",
    },
    notation: {
      fontSize: 14,
      color: isDarkMode ? "#fff" : "#000",
      fontWeight: "500",
    },
    optionsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    leftAction: {
      backgroundColor: "red",
      padding: 10,
    },

    actionText: {
      fontWeight: "500",
      color: "#fff",
    },
  });
  return (
    <View style={styles.set}>
      <Text style={styles.setName}>{setName}</Text>
      <View style={styles.reps}>
        <TextInput
          autoCorrect={false}
          keyboardType="number-pad"
          style={styles.counts}
          placeholder={"8"}
          placeholderTextColor={"#ddd"}
        />
        <Text style={styles.notation}>reps</Text>
      </View>
      <View style={styles.reps}>
        <TextInput
          autoCorrect={false}
          keyboardType="number-pad"
          style={styles.counts}
          placeholder={`${weight}`}
          placeholderTextColor={"#ddd"}
        />
        <Text style={styles.notation}>Lbs</Text>
      </View>
      <View style={styles.reps}>
        <TextInput
          keyboardType="number-pad"
          autoCorrect={false}
          placeholder={`${time}`}
          placeholderTextColor={"#ddd"}
          style={styles.counts}
        />
        <Text style={styles.notation}>min</Text>
      </View>
    </View>
  );
};

export default EditSet;
