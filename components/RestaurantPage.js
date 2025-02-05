import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { menu_list, food_list } from "../assets/assets";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.rescontainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.restaurantName, { fontSize: 26 }]}>
          {restaurant.Restaurant_name || "Restaurant Not Found"}
        </Text>
        <View style={styles.infoRow}>
          <MaterialIcons name="timer" size={16} color="black" />
          <Text style={styles.infoText}>
            {restaurant.deliveryTime || "30"} mins
          </Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.infoText}>{restaurant.distance || "4.2"} km</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.infoText}>
            {restaurant.location || "Location Not Found"}
          </Text>
        </View>
        <View style={styles.scheduleRow}>
          <MaterialIcons name="schedule" size={16} color="black" />
          <Text style={styles.scheduleText}> Schedule for later </Text>
        </View>
        <View style={styles.reorderRow}>
          <FontAwesome name="check-circle" size={16} color="black" />
          <Text style={styles.reorderText}> Frequently reordered </Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{restaurant.rating || "3.8"}</Text>
        <Text style={styles.ratingSubText}>
          {restaurant.ratingCount || "81.3K"} ratings
        </Text>
      </View>
    </View>
  );
};

export default function RestaurantPage({ route }) {
  const info = menu_list;

  const { width, height } = Dimensions.get("screen");

  const [selectedMenu, setSelectedMenu] = React.useState(null);

  const { restaurant } = route.params || {};

  const handleAddToCart = (item) => {
    console.log("Added to Cart:", item.name);
  };

  return (
    <View style={styles.content}>
      <RestaurantHeader restaurant={restaurant} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={restaurant.food_items}
          renderItem={({ item }) => (
            <View key={item._id} style={styles.foodCard}>
              <Image source={item.image} style={styles.foodImage} />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodDescription}>{item.description}</Text>
                <Text style={styles.foodPrice}>${item.price}</Text>
              </View>
              <View style={styles.cartButtonContainer}>
                <TouchableOpacity
                  style={styles.cartButton}
                  onPress={() => handleAddToCart(item)}
                >
                  <Text style={styles.cartButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item._id} // Ensures last item is visible
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeFood: {
    borderWidth: 3,
    borderColor: "#FF4C24",
  },
  content: {
    flex: 1,
  },
  card: {
    height: 275,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  foodCard: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    margin: 10,
    height: 130,
    gap: 10,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  foodInfo: {
    width: 200,
    marginLeft: 10,
    justifyContent: "flex-start",
    gap: 5,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  foodDescription: {
    fontSize: 14,
    color: "gray",
  },
  foodPrice: {
    fontSize: 16,
    color: "#FF4C24",
    fontWeight: "bold",
  },
  restaurantName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  rescontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  textContainer: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  infoText: {
    fontSize: 14,
    color: "gray",
    marginHorizontal: 4,
  },
  dot: {
    fontSize: 14,
    color: "gray",
  },
  scheduleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  scheduleText: {
    fontSize: 14,
    color: "black",
    marginLeft: 4,
  },
  reorderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  reorderText: {
    fontSize: 14,
    color: "gray",
    marginLeft: 4,
  },
  ratingContainer: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 8,
    borderRadius: 8,
  },
  ratingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  ratingSubText: {
    color: "white",
    fontSize: 12,
  },
  cartButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  cartButton: {
    backgroundColor: "#FF4C24",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  cartButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
