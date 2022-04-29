import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { Button } from "react-native-elements";
import { setDestination, setOrigin } from "../slices/navSlice";

import Item from "../components/Item";
import { SafeAreaView } from "react-native-safe-area-context";

let data2 = [
  {
    id: 1,
    image: "",
    name: "yasser",
    full_name: "karami",
    description: "halegbjrmgnerngjtg",
    stargazers_count: 45,
  },
  {
    id: 6,
    image: "",
    name: "yasser",
    full_name: "karami",
    description: "halegbjrmgnerngjtg",
    stargazers_count: 45,
  },
  {
    id: 2,
    image: "",
    name: "yasser",
    full_name: "karami",
    description: "halegbjrmgnerngjtg",
    stargazers_count: 45,
  },
  {
    id: 3,
    image: "",
    name: "yasser",
    full_name: "karami",
    description: "halegbjrmgnerngjtg",
    stargazers_count: 45,
  },
  {
    id: 4,
    image: "",
    name: "yasser",
    full_name: "karami",
    description: "halegbjrmgnerngjtg",
    stargazers_count: 45,
  },
  {
    id: 5,
    image: "",
    name: "yasser",
    full_name: "karami",
    description: "halegbjrmgnerngjtg",
    stargazers_count: 45,
  },
];

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const handleAuth = () => {
    console.log("test");
  };
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data2}
          initialNumToRender={1}
          ListFooterComponent={<ActivityIndicator size="large" color="black" />}
          //style={{display:'flex'}}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "red",
    padding: 0,
    margin: 0,
  },
});
