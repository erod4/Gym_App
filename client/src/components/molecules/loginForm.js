import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import FormInput from "../atoms/formInput";
import FormButton from "../atoms/formButton";
import { useNavigation } from "@react-navigation/native";
import RegisterScreen from "../../screens/RegisterScreen";
const LoginForm = () => {
  const navigation = useNavigation();
  const toSignUp = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <FormInput icon={"fa-envelope"} label={"Email"} />
      <FormInput icon={"fa-lock"} label={"Password"} />
      <FormButton link={"nav"} title={"Login"} />
      <View style={styles.text}>
        <Text> Don't have an account? </Text>
        <TouchableOpacity onPress={toSignUp}>
          <Text style={{ color: "#03045e" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    display: "flex",
    alignItems: "center",
    fontSize: 18,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
});
export default LoginForm;
