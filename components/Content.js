import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { menu_list } from "../assets/assets";
export default function Content() {
  const info = menu_list;
  const { width, height } = Dimensions.get("screen");
  return (
    <View style={styles.content}>
      <View
        style={{
          width: width,
          height: height,
          padding: 15,
        }}
      >
        <View style={styles.card}>
          <View style={{ width: "100%", height: "85%" }}>
            <Image
              source={require("../assets/header_img_2.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: "15%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>
              <Text style={{ color: "#FF4C24" }}>Tomato</Text>, Your Favorite
              Food, Just a Tap Away 🍔
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width,
            height: 130,
            // backgroundColor: "pink",
            marginHorizontal: -15,
            marginTop: 20,
          }}
        >
          <FlatList
            data={info}
            renderItem={({ item }) => (
              <View
                style={{
                  width: 90,
                  height: 90,
                  marginLeft: 10,
                  marginRight: 10,

                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Image
                  source={item.menu_image}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderWidth: 3,
                    borderColor: "#FF4C24",
                    borderRadius: 50,
                  }}
                />
                <Text style={{ paddingTop: 10, fontSize: 16 }}>
                  {item.menu_name}
                </Text>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 8,
    // backgroundColor: "lightgrey",
  },
  card: {
    height: 275,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
});
