import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = () => {
  const TabNav = createBottomTabNavigator();
  return (
    <TabNav.Navigator>
      <TabNav.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <TabNav.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="map" />,
        }}
        name="Map"
        component={MapScreen}
      />
    </TabNav.Navigator>
  );
};

export default Tab;

const styles = StyleSheet.create({});
