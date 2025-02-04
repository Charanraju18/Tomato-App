import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Content from "./Content";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
export default function HomePage() {
  const BottomBar = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomBar.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#FF4C24",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ focused, color }) => {
            let IconName;
            if (route.name === "Home") {
              IconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Favorite") {
              IconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Search") {
              IconName = focused ? "search" : "search-outline";
            } else if (route.name === "Cart") {
              IconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Profile") {
              IconName = focused ? "person" : "person-outline";
            }
            return <Icon name={IconName} color={color} size={24} />;
          },
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 16,
          },
        })}
      >
        <BottomBar.Screen name="Home" component={Content} />
        <BottomBar.Screen name="Favorite" component={Content} />
        <BottomBar.Screen name="Search" component={Content} />
        <BottomBar.Screen name="Cart" component={Content} />
        <BottomBar.Screen name="Profile" component={Content} />
      </BottomBar.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
