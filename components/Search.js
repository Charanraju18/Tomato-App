import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { restaurant_info } from "../assets/assets";

const FavoritesFood = () => {
  const navigation = useNavigation();
  const [restaurantInfo, setRestaurantInfo] = React.useState([]);

  React.useEffect(() => {
    const favoriteRestaurants = restaurant_info.filter(
      (restaurant) => restaurant.isFav
    );
    setRestaurantInfo(favoriteRestaurants);
  }, []);

  const navigateToRestaurant = (restaurant) => {
    navigation.navigate("RestaurantDetail", { restaurant });
  };

  return (
    <View style={styles.content}>
      <FlatList
        data={restaurantInfo}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.restaurant_id}
            style={styles.restaurantCard}
            onPress={() => navigateToRestaurant(item)}
          >
            <Image source={item.image} style={styles.restaurantImage} />
            <View style={styles.overlayIcons}>
              <TouchableOpacity>
                <Icon name="bookmark" size={20} color="#FF4B01" />
              </TouchableOpacity>
            </View>
            <View style={styles.restaurantDetails}>
              <View style={styles.titleRow}>
                <Text style={styles.restaurantName}>
                  {item.Restaurant_name}
                </Text>
                <View style={styles.ratingBox}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                </View>
              </View>
              <View style={styles.metaInfo}>
                <Text style={styles.deliveryInfo}>
                  ⏳ {item.time} mins • 📍 {item.distance} km
                </Text>
              </View>
              {item.offer && <Text style={styles.offerText}>{item.offer}</Text>}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.restaurant_id}
      />
    </View>
  );
};

export default function Search() {
  const { width, height } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <View
        style={{
          width: width,
          alignItems: "center",
          padding: 15,
        }}
      >
        <View style={[styles.input, { width: "100%" }]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              height: "100%",
            }}
          >
            <Icon name="search" size={20} color="black" />
            <TextInput
              style={{ width: "90%" }}
              placeholder="Type here to search"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "20%",
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: 20,
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 27 }}>|</Text>
            <Icon name="mic" size={20} color="black" />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          marginTop: 10,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
        <View>
          <Text
            style={{
              width: 125,
              textAlign: "center",
              letterSpacing: 5,
              color: "grey",
            }}
          >
            EXPLORE
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
      </View>
      <Text
        style={{
          paddingLeft: 15,
          fontSize: 28,
          color: "#FF4C24",
          marginTop: 10,
        }}
      >
        Your Favorites
      </Text>
      <FavoritesFood />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    color: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingLeft: 10,
  },
  content: {
    flex: 8,
  },
  restaurantCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 12,
    overflow: "hidden",
    elevation: 3,
  },
  restaurantImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  overlayIcons: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 6,
    borderRadius: 20,
  },
  restaurantDetails: {
    padding: 12,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingBox: {
    backgroundColor: "#27AE60",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  ratingText: {
    color: "#fff",
    fontWeight: "bold",
  },
  restaurantLocation: {
    color: "#555",
    marginTop: 2,
  },
  metaInfo: {
    marginTop: 6,
  },
  deliveryInfo: {
    color: "#777",
  },
  offerText: {
    marginTop: 6,
    color: "#D32F2F",
    fontWeight: "bold",
  },
});
