import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import RegisterScreen from "./src/screens/RegisterScreen";
import BottomTabs from "./src/navigation/BottomTabs";
import StartWorkout from "./src/screens/StartWorkout";
import WorkoutPage from "./src/screens/WorkoutPage";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { EditContextProvider } from "./src/store/actions/clientActions/EditWorkout";
import { WeightSliderProvider } from "./src/store/actions/clientActions/WeightSlider";
import { SettingsSliderContextProvider } from "./src/store/actions/clientActions/SettingsSlider";

import { TimerSliderProvider } from "./src/store/actions/clientActions/TimerSlider";
import OpenTimerButton from "./src/components/atoms/OpenTimerButton";
import { TimerProvider } from "./src/store/actions/clientActions/Timer";
import { RatingSliderContextProvider } from "./src/store/actions/clientActions/RatingSlider";
import {
  SaveContext,
  SaveContextProvider,
} from "./src/store/actions/clientActions/SaveWorkout";
import { useContext } from "react";
import WeightProgress from "./src/screens/WeightProgress";
import BodyMeasurements from "./src/screens/BodyMeasurements";
import StepsPhysicalActivity from "./src/screens/StepsPhysicalActivity";
import Account from "./src/screens/Account";

import Units from "./src/screens/Units";
import Goals from "./src/screens/Goals";
import { AppleHealthContextProvider } from "./src/store/actions/clientActions/PhysicalActivity";
import CustomHeaderTitle from "./src/components/atoms/CustomHeaderTitle";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppleHealthContextProvider>
        <EditContextProvider>
          <WeightSliderProvider>
            <SettingsSliderContextProvider>
              <SaveContextProvider>
                <RatingSliderContextProvider>
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
                            name="WeightProgress"
                            component={WeightProgress}
                            options={{
                              headerShown: true,
                              title: "Lifting Progression",
                            }}
                          />
                          <Stack.Screen
                            name="Account"
                            component={Account}
                            options={{
                              headerShown: true,
                              title: "Account",
                            }}
                          />
                          <Stack.Screen
                            name="Units"
                            component={Units}
                            options={{
                              headerShown: true,
                              title: "Units Settings",
                            }}
                          />
                          <Stack.Screen
                            name="Goals"
                            component={Goals}
                            options={{
                              headerShown: true,
                              title: "Fitness Goals",
                            }}
                          />
                          <Stack.Screen
                            name="BodyMeasur"
                            component={BodyMeasurements}
                            options={{
                              headerTitle: CustomHeaderTitle,
                            }}
                          />
                          <Stack.Screen
                            name="workout-page"
                            component={WorkoutPage}
                            options={({ route }) => {
                              const { startSaving } = useContext(SaveContext);

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
                          <Stack.Screen
                            name="PhysicalActivity"
                            component={StepsPhysicalActivity}
                            options={{
                              headerShown: true,
                              title: "Steps",

                              headerShadowVisible: false,
                            }}
                          />
                        </Stack.Navigator>
                      </NavigationContainer>
                    </TimerProvider>
                  </TimerSliderProvider>
                </RatingSliderContextProvider>
              </SaveContextProvider>
            </SettingsSliderContextProvider>
          </WeightSliderProvider>
        </EditContextProvider>
      </AppleHealthContextProvider>
    </GestureHandlerRootView>
  );
}
