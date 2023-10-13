import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import RegisterForm from "../components/molecules/RegisterForm";
const RegisterScreen = () => {
  library.add(faUser);
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",

    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RegisterScreen;
