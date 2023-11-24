import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import RegisterForm from "../components/molecules/RegisterForm";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const RegisterScreen = () => {
  const { isDarkMode } = useContext(AppearenceContext);

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      height: "100%",
      backgroundColor: !isDarkMode ? "#fff" : "#192734",

      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  library.add(faUser);
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;
