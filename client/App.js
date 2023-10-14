import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import RegisterScreen from "./src/screens/RegisterScreen";
import BottomTabs from "./src/navigation/BottomTabs";
import StartWorkout from "./src/screens/StartWorkout";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="nav"
          component={BottomTabs}
          options={{ headerShown: false, headerBackVisible: true }}
        />
        <Stack.Screen
          name="StartWorkout"
          component={StartWorkout}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
