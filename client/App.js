import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import RegisterScreen from "./src/screens/RegisterScreen";
import BottomTabs from "./src/navigation/BottomTabs";
import StartWorkout from "./src/screens/StartWorkout";
import WorkoutPage from "./src/screens/WorkoutPage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OptionsButton from "./src/components/atoms/OptionsButton";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
            options={{ headerShown: true, title: "Workouts" }}
          />
          <Stack.Screen
            name="workout-page"
            component={WorkoutPage}
            options={({ route }) => {
              const exerciseName = route.params?.name || "Workout Page";
              return {
                headerShown: true,
                title: exerciseName,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
