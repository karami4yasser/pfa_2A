import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignUp from "../components/SignUp";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1988b5",

    display: "flex",
    flex: 1,
  },
});
