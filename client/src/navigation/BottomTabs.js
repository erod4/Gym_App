import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

import Statistics from "../screens/Statistics";
import Profile from "../screens/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Nutrition from "../screens/Nutrition";
const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255,255,255,0.4)",
        tabBarStyle: { backgroundColor: "#444" },
      }}
    >
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
