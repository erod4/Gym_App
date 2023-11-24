import { View, Text, TextInput, StyleSheet } from "react-native";

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const FormInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  icon,
}) => {
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      width: "100%",
      color: isDarkMode ? "#fff" : "#000",
      padding: 10,
    },
    inputView: {
      fontSize: 20,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#eee",
      padding: 2,
      paddingLeft: 15,
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: !isDarkMode ? "#fff" : "#253341",

      alignItems: "center",
    },
    input: {
      flex: 1,
      padding: 10,
      lineHeight: 20,
      color: !isDarkMode ? "#000" : "#ddd",
    },
    container: {
      display: "flex",
      flexDirection: "column",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={icon} color={!isDarkMode ? "#000" : "#ddd"} />
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={!isDarkMode ? "#ddd" : "#000"}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default FormInput;
