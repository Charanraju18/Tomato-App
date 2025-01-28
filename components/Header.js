import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function Header() {
  return (
    <View style={styles.headerDiv}>
      <Image source={require("../assets/logo.png")} />
      <MaterialCommunityIcons name="bell-ring" size={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerDiv: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderColor: "lightgrey",
  },
});
