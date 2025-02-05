import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { restaurant_info } from "../assets/assets";
import Header from "./Header";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
export default function Favorites() {
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
      <Header />
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
}

const styles = StyleSheet.create({
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
