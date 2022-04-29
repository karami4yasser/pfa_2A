import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View style={tw`h-full`}>
      <View style={tw`h-full`}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
