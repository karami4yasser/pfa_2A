import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Input, Overlay, SocialIcon } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import SignUpScreen from "../screens/SignUpScreen";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const signIn = () => {
    dispatch(setUser("authUser"));
  };

  const signInWIthEmail = async () => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Overlay isVisible={loading}>
        <ActivityIndicator size="large" color="black" />
      </Overlay>
      {
        <View>
          <View style={styles.form}>
            <Input
              inputContainerStyle={styles.input}
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <Input
              inputContainerStyle={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
              leftIcon={<Icon name="lock" size={24} color="black" />}
            />
            <Button
              onPress={() => {}}
              title="Sign In"
              color="#841584"
              accessibilityLabel="Sign In"
            />
            <View style={styles.separator} />
            <View style={styles.separator} />
            <View style={styles.separator} />
            <Button
              onPress={() => {
                navigation.navigate(SignUpScreen);
              }}
              title="Sign Up"
              color="#841584"
              accessibilityLabel="Sign Up"
            />

            <View style={styles.separator} />
          </View>
          <View style={styles.Socials}>
            <SocialIcon
              onPress={signIn}
              title={"Sign In With Google"}
              type="google"
            />
            <SocialIcon
              onPress={signIn}
              title={"Sign In With Google"}
              type="facebook"
            />
            <SocialIcon
              onPress={signIn}
              title={"Sign In With Google"}
              type="twitter"
            />
          </View>
        </View>
      }
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    padding: 50,

    flex: 1,
    alignSelf: "center",
    justifyContent: "center",

    marginHorizontal: 16,

    backgroundColor: "#1988b5",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  form: {
    padding: 10,
    margin: 10,
  },
  Socials: {
    marginLeft: 50,
    marginRight: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    marginBottom: 10,

    backgroundColor: "white",
  },
});
