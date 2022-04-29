import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Button, Input, Overlay } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "tailwind-react-native-classnames";

const Add = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [150, 150],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <Overlay isVisible={loading}>
        <ActivityIndicator size="large" color="black" />
      </Overlay>
      <TouchableOpacity
        onPress={pickImage}
        style={tw`bg-gray-100 absolute top-8 right-2 p-3 z-50 rounded-full shadow-lg`}
      >
        <Icon name="image" />
      </TouchableOpacity>
      {
        <View>
          <View style={styles.form}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 200,
                  height: 200,
                  alignSelf: "center",
                  marginBottom: 10,
                }}
              />
            )}

            <ScrollView style={styles.scroll}>
              <Input
                inputContainerStyle={styles.input}
                placeholder="problem"
                onChangeText={(value) => setEmail(value)}
              />
              <Input
                inputContainerStyle={styles.input}
                placeholder="description"
                onChangeText={(value) => setPassword(value)}
              />
              <Input
                inputContainerStyle={styles.input}
                placeholder="description"
                onChangeText={(value) => setPassword(value)}
              />
              <Input
                inputContainerStyle={styles.input}
                placeholder="description"
                onChangeText={(value) => setPassword(value)}
              />
              <Input
                inputContainerStyle={styles.input}
                placeholder="description"
                onChangeText={(value) => setPassword(value)}
              />
              <Input
                inputContainerStyle={styles.input}
                placeholder="description"
                onChangeText={(value) => setPassword(value)}
              />
              <Input
                inputContainerStyle={styles.input}
                placeholder="description"
                onChangeText={(value) => setPassword(value)}
              />
              <Input
                inputContainerStyle={styles.input}
                placeholder="description"
                onChangeText={(value) => setPassword(value)}
              />
              <Input
                inputContainerStyle={styles.input}
                placeholder="description"
                onChangeText={(value) => setPassword(value)}
              />
            </ScrollView>
            <Button
              onPress={() => {}}
              title="Post"
              color="#841584"
              accessibilityLabel="Post Problem"
            />
            <View style={styles.separator} />
            <View style={styles.separator} />
            <View style={styles.separator} />

            <View style={styles.separator} />
          </View>
          <View style={styles.Socials}></View>
        </View>
      }
    </View>
  );
};

export default Add;
const styles = StyleSheet.create({
  scroll: {
    height: 400,
  },
  container: {
    width: "100%",
    display: "flex",
    padding: 10,
    paddingTop: 60,

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
