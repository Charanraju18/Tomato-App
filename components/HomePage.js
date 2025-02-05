import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Content from "./Content";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Favorites from "./Favorites";
import Cart from "./Cart";
import Profile from "./Profile";
import Search from "./Search";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantPage from "./RestaurantPage";
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
        <BottomBar.Screen name="Home" component={Home} />
        <BottomBar.Screen name="Favorite" component={Fav} />
        <BottomBar.Screen name="Search" component={Search} />
        <BottomBar.Screen name="Cart" component={Cart} />
        <BottomBar.Screen name="Profile" component={Profile} />
      </BottomBar.Navigator>
    </NavigationContainer>
  );
}

const Home = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="HomeStack" component={Content} />
      <stack.Screen
        name="RestaurantDetail"
        component={RestaurantPage}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

const Fav = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="HomeStack" component={Favorites} />
      <stack.Screen
        name="RestaurantDetail"
        component={RestaurantPage}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
