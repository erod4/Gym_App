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
import { InteractionContextProvider } from "./src/store/actions/clientActions/Interaction";

import OpenTimerButton from "./src/components/atoms/OpenTimerButton";
import { TimerProvider } from "./src/store/actions/clientActions/Timer";

import {
  SaveContext,
  SaveContextProvider,
} from "./src/store/actions/clientActions/SaveWorkout";
import WeightProgress from "./src/screens/WeightProgress";
import BodyMeasurements from "./src/screens/BodyMeasurements";
import StepsPhysicalActivity from "./src/screens/StepsPhysicalActivity";
import Account from "./src/screens/Account";

import Units from "./src/screens/Units";
import Goals from "./src/screens/Goals";
import { AppleHealthContextProvider } from "./src/store/actions/clientActions/PhysicalActivity";
import CustomHeaderTitle from "./src/components/atoms/CustomHeaderTitle";
import StepsPhysicalActivityHeader from "./src/components/atoms/StepsPhysicalActivityHeader";
import {
  AppearenceContext,
  AppearenceContextProvider,
} from "./src/store/actions/clientActions/Appearence";
import ExcerciseHeaderLeft from "./src/components/atoms/ExcerciseHeaderLeft";
import ExcerciseHeader from "./src/components/atoms/ExcerciseHeader";

import { NutritionContextProvider } from "./src/store/actions/clientActions/Nutrition";
import BarcodeScanner from "./src/components/molecules/BarcodeScanner";
import SplashScreen from "./src/screens/SplashScreen";
import { HomeScreenContextProvider } from "./src/store/actions/clientActions/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NutritionContextProvider>
        <AppearenceContextProvider>
          <AppleHealthContextProvider>
            <EditContextProvider>
              <InteractionContextProvider>
                <SaveContextProvider>
                  <HomeScreenContextProvider>
                    <TimerProvider>
                      <NavigationContainer>
                        <Stack.Navigator initialRouteName="Splash">
                          <Stack.Screen
                            name="Splash"
                            component={SplashScreen}
                            options={{ headerShown: false }}
                          />
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
                              title: "Home",
                              headerBackVisible: true,
                            }}
                          />
                          <Stack.Screen
                            name="StartWorkout"
                            component={StartWorkout}
                            options={({ route }) => ({
                              headerTintColor: route.params.isDarkMode
                                ? "#fff"
                                : "#000",
                              headerShown: true,
                              title: "Workouts",
                              headerStyle: {
                                backgroundColor: route.params.isDarkMode
                                  ? "#192734"
                                  : "#fff",
                              },
                              headerTitleStyle: {
                                fontSize: 20,
                                color: route.params.isDarkMode
                                  ? "#ddd"
                                  : "#000",
                              },
                            })}
                          />

                          <Stack.Screen
                            name="WeightProgress"
                            component={WeightProgress}
                            options={({ route }) => ({
                              headerTintColor: route.params.isDarkMode
                                ? "#fff"
                                : "#000",
                              headerShown: true,
                              title: "Lifting Progression",
                              headerTitleStyle: {
                                color: route.params.isDarkMode
                                  ? "#fff"
                                  : "#000",
                              },
                              headerStyle: {
                                backgroundColor: route.params.isDarkMode
                                  ? "#192734"
                                  : "#fff",
                              },
                            })}
                          />
                          <Stack.Screen
                            name="Account"
                            component={Account}
                            options={({ route }) => ({
                              headerShown: true,
                              title: "Account",
                              headerTintColor: route.params.isDarkMode
                                ? "#fff"
                                : "#000",

                              headerTitleStyle: {
                                color: route.params.isDarkMode
                                  ? "#fff"
                                  : "#000",
                              },
                              headerStyle: {
                                backgroundColor: route.params.isDarkMode
                                  ? "#192734"
                                  : "#fff",
                              },
                            })}
                          />
                          <Stack.Screen
                            name="Units"
                            component={Units}
                            options={({ route }) => ({
                              headerShown: true,
                              title: "Weight Units",
                              headerTintColor: route.params.isDarkMode
                                ? "#fff"
                                : "#000",

                              headerTitleStyle: {
                                color: route.params.isDarkMode
                                  ? "#fff"
                                  : "#000",
                              },
                              headerStyle: {
                                backgroundColor: route.params.isDarkMode
                                  ? "#192734"
                                  : "#fff",
                              },
                            })}
                          />
                          <Stack.Screen
                            name="Goals"
                            component={Goals}
                            options={({ route }) => ({
                              headerShown: true,
                              title: "Fitness Goals",
                              headerTintColor: route.params.isDarkMode
                                ? "#fff"
                                : "#000",

                              headerTitleStyle: {
                                color: route.params.isDarkMode
                                  ? "#fff"
                                  : "#000",
                              },
                              headerStyle: {
                                backgroundColor: route.params.isDarkMode
                                  ? "#192734"
                                  : "#fff",
                              },
                            })}
                          />
                          <Stack.Screen
                            name="BodyMeasur"
                            component={BodyMeasurements}
                            options={({ route }) => ({
                              headerTintColor: route.params.isDarkMode
                                ? "#fff"
                                : "#000",
                              headerTitle: CustomHeaderTitle,
                              headerStyle: {
                                backgroundColor: route.params.isDarkMode
                                  ? "#192734"
                                  : "#fff",
                              },
                            })}
                          />

                          <Stack.Screen
                            name="workout-page"
                            component={WorkoutPage}
                            options={({ route }) => ({
                              headerLeft: ExcerciseHeaderLeft,
                              headerStyle: {
                                backgroundColor: route.params.isDarkMode
                                  ? "#192734"
                                  : "#fff",
                              },
                              headerRight: () => <OpenTimerButton />,
                              headerTitle: () => (
                                <ExcerciseHeader route={route} />
                              ),
                            })}
                          />
                          <Stack.Screen
                            name="PhysicalActivity"
                            component={StepsPhysicalActivity}
                            options={({ route }) => ({
                              headerTintColor: route.params.isDarkMode
                                ? "#fff"
                                : "#000",
                              headerStyle: {
                                backgroundColor: route.params.isDarkMode
                                  ? "#192734"
                                  : "#fff",
                              },
                              headerTitle: StepsPhysicalActivityHeader,
                            })}
                          />
                        </Stack.Navigator>
                      </NavigationContainer>
                    </TimerProvider>
                  </HomeScreenContextProvider>
                </SaveContextProvider>
              </InteractionContextProvider>
            </EditContextProvider>
          </AppleHealthContextProvider>
        </AppearenceContextProvider>
      </NutritionContextProvider>
    </GestureHandlerRootView>
  );
}
