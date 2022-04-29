import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import LoginScreen from "./LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-web";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUpScreen from "./SignUpScreen";
import { Icon } from "react-native-elements/dist/icons/Icon";

import { Button, Header, Overlay } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../slices/navSlice";
import { auth } from "../firebase";
import Tab from "../components/Tab";
import Add from "../components/Add";
const MainScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const Stack = createNativeStackNavigator();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("thu user is", authUser);
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      {!user && (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
      {user && (
        <SafeAreaProvider style={styles.container}>
          <Header
            containerStyle={styles.header}
            leftComponent={{
              icon: "menu",
              color: "#fff",
              iconStyle: { color: "#fff" },
            }}
            centerComponent={{ text: "Help Me", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
          {visible && (
            <TouchableOpacity
              onPress={toggleOverlay}
              style={tw`bg-gray-100 absolute top-32 left-8 p-3 z-50 rounded-full shadow-lg`}
            >
              <Icon name="chevron-left" />
            </TouchableOpacity>
          )}
          {visible && <Add />}
          {!visible && (
            <TouchableOpacity
              onPress={toggleOverlay}
              style={tw`bg-gray-100 absolute bottom-32 right-8 p-3 z-50 rounded-full shadow-lg`}
            >
              <Icon name="add" />
            </TouchableOpacity>
          )}

          {!visible && <Tab />}
          <TouchableOpacity
            onPress={() => {
              dispatch(setUser(null));
            }}
            style={tw`bg-gray-100 absolute bottom-16 left-8 p-3 z-50 rounded-full shadow-lg`}
          >
            <Icon name="logout" />
          </TouchableOpacity>
        </SafeAreaProvider>
      )}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  header: {
    height: 100,
    paddingHorizontal: 20,
  },
});
