import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const Item = ({ item }) => {
  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "gray",
        padding: 10,
        margin: 10,
        marginTop: 0,
      }}
    >
      <View
        style={{
          display: "flex",
          backgroundColor: "black",
          flexDirection: "row",
          flexGrow: 1,
          height: 150,
        }}
      >
        <View></View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              width: 290,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                margin: 0,
                paddingTop: 8,
                fontSize: 25,
                color: "white",
                alignSelf: "center",
              }}
            >
              {item?.name}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                paddingTop: 8,
                fontSize: 12,
                color: "white",
                alignSelf: "center",
              }}
            >
              {item?.full_name}{" "}
            </Text>
            <Text
              style={{ paddingTop: 18, fontSize: 15, color: "white" }}
              numberOfLines={2}
            >
              {item?.description}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text>
          {" "}
          This Repository Has {item?.stargazers_count} Stars With{" "}
          {item?.open_issues} open issues
        </Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width: "150px",
    height: "150px",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 100,
    marginLeft: 5,
  },
});
