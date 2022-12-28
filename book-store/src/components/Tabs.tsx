import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
import HomeScreen from "../screens/HomeScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type Props = {};

const Tab = createBottomTabNavigator();

const Tabs = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: "#1E1B26",
          },
        ],
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? "#ffffff" : "#2D3038";

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case "Search":
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case "Notification":
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case "Settings":
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Notification" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
