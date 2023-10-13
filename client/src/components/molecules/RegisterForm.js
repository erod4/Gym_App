import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FormInput from "../atoms/formInput";
import FormButton from "../atoms/formButton";
import { useNavigation } from "@react-navigation/native";
const RegisterForm = () => {
  const navigation = useNavigation();
  const toLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <FormInput label={"Full Name"} icon={"fa-user"} />
      <FormInput label={"Email"} icon={"fa-envelope"} />
      <FormInput label={"Password"} icon={"fa-lock"} />
      <FormInput label={"Confirm Password"} icon={"fa-lock"} />
      <FormButton link={"nav"} title={"Sign Up"} />
      <View style={styles.text}>
        <Text>Already have am account? </Text>
        <TouchableOpacity onPress={toLogin}>
          <Text style={{ color: "#03045e" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
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
export default RegisterForm;
