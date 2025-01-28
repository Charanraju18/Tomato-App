import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
