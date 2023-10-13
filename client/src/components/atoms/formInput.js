import { View, Text, TextInput, StyleSheet } from "react-native";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const FormInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={icon} />
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width: "100%",

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

    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 10,

    lineHeight: 20,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
export default FormInput;
