import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Routines from "../screens/Routines";
import Statistics from "../screens/Statistics";
import Profile from "../screens/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#0077b6" }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon="fa-home" style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Routines"
        component={Routines}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#0077b6",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon="fa-dumbbell" style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon="fa-chart-line" style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon="fa-user" style={{ color: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
