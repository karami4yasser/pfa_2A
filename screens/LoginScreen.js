import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Login from "../components/Login";
import { Image } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1988b5",

    display: "flex",
    flex: 1,
  },
});
