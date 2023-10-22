import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import RegisterScreen from "./src/screens/RegisterScreen";
import BottomTabs from "./src/navigation/BottomTabs";
import StartWorkout from "./src/screens/StartWorkout";
import WorkoutPage from "./src/screens/WorkoutPage";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { HealthProvider } from "./src/store/actions/clientActions/AppleHealth";
import { EditProvider } from "./src/store/actions/clientActions/EditWorkout";
import { WeightSliderProvider } from "./src/store/actions/clientActions/WeightSlider";
import { SettingsSliderProvider } from "./src/store/actions/clientActions/SettingsSlider";

import {
  SaveProvider,
  useSaveContext,
} from "./src/store/actions/clientActions/SaveWorkout";
import { RatingSliderProvider } from "./src/store/actions/clientActions/RatingSlider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  TimerSliderProvider,
  useTimerSliderContext,
} from "./src/store/actions/clientActions/TimerSlider";
import OpenTimerButton from "./src/components/atoms/OpenTimerButton";
import { TimerProvider } from "./src/store/actions/clientActions/Timer";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HealthProvider>
        <EditProvider>
          <WeightSliderProvider>
            <SettingsSliderProvider>
              <SaveProvider>
                <RatingSliderProvider>
                  <TimerSliderProvider>
                    <TimerProvider>
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
                            options={{
                              headerShown: false,
                              headerBackVisible: true,
                            }}
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
                              const { startSaving } = useSaveContext();

                              const exerciseName =
                                route.params?.name || "Workout Page";
                              return {
                                headerShown: true,
                                title: exerciseName,
                                headerLeft: () => (
                                  <Button
                                    title="Return"
                                    onPress={startSaving}
                                  />
                                ),
                                headerRight: () => <OpenTimerButton />,
                              };
                            }}
                          />
                        </Stack.Navigator>
                      </NavigationContainer>
                    </TimerProvider>
                  </TimerSliderProvider>
                </RatingSliderProvider>
              </SaveProvider>
            </SettingsSliderProvider>
          </WeightSliderProvider>
        </EditProvider>
      </HealthProvider>
    </GestureHandlerRootView>
  );
}
