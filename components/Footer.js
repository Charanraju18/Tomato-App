import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function Footer() {
  return (
    <>
      <View style={styles.footerDiv}>
        <View style={styles.iconsDiv}>
          <Octicons name="home" color={"black"} size={25} />
          <Text style={{ fontSize: 12 }}>Home</Text>
        </View>
        <View style={styles.iconsDiv}>
          <AntDesign name="hearto" size={25} />
          <Text style={{ fontSize: 12 }}>Favorite</Text>
        </View>
        <View style={styles.iconsDiv}>
          <Ionicons name="search-outline" size={25} />
          <Text style={{ fontSize: 12 }}>Search</Text>
        </View>
        <View style={styles.iconsDiv}>
          <Ionicons name="cart-outline" size={25} />
          <Text style={{ fontSize: 12 }}>Cart</Text>
        </View>
        <View style={styles.iconsDiv}>
          <FontAwesome name="user-o" size={25} />
          <Text style={{ fontSize: 12 }}>Profile</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  footerDiv: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: "lightgrey",
  },
  iconsDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
