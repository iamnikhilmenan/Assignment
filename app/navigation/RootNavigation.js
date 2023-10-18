import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import CalenderScreen from "../screens/BottomBarScreens/CalenderScreen";
import HomeScreen from "../screens/BottomBarScreens/HomeScreen";
import MessageScreen from "../screens/BottomBarScreens/MessageScreen";
import CardScreen from "../screens/BottomBarScreens/CardScreen";
import ProfileScreen from "../screens/BottomBarScreens/ProfileScreen";

const BottomNavigation = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <BottomNavigation.Navigator
        labeled={false}
        barStyle={{
          backgroundColor: "#fff",
          paddingHorizontal: 12,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          overflow: "hidden",
          position: "absolute",
        }}
      >
        <BottomNavigation.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="alarm-panel-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <BottomNavigation.Screen
          name="Message"
          component={MessageScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="message1" size={24} color="black" />
            ),
          }}
        />
        <BottomNavigation.Screen
          name="Calender"
          component={CalenderScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calendar-month"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <BottomNavigation.Screen
          name="Notes"
          component={CardScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="credit-card-multiple-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <BottomNavigation.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </BottomNavigation.Navigator>
    </NavigationContainer>
  );
}
