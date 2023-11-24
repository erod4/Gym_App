import { ScrollView, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/molecules/loginForm";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useContext } from "react";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";
const LoginScreen = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: !isDarkMode ? "#fff" : "#192734",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
  });
  library.add(faLock, faEnvelope, faFire);
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
