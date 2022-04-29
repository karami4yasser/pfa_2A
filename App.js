import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainScreen from "./screens/MainScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import tw from "tailwind-react-native-classnames";
import "react-native-gesture-handler";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={tw`flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <MainScreen />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
