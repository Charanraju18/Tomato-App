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
import { menu_list, food_list, restaurant_info } from "../assets/assets";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
export default function Content() {
  const navigation = useNavigation();
  const info = menu_list;
  const { width, height } = Dimensions.get("screen");

  const [selectedMenu, setSelectedMenu] = React.useState(null);

  const renderHeader = () => (
    <View>
      <View style={{ width: width, padding: 10 }}>
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
      </View>
      <View
        style={{
          width: width,
          height: 130,
          marginTop: 20,
        }}
      >
        <FlatList
          data={info}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                {
                  width: 90,
                  height: 90,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginHorizontal: 5,
                  borderRadius: 50,
                },
                selectedMenu === item.menu_name ? styles.activeFood : null,
              ]}
              onPress={() => setSelectedMenu(item.menu_name)}
            >
              <Image
                source={item.menu_image}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 50,
                }}
              />
              <Text style={{ paddingTop: 10, fontSize: 16 }}>
                {item.menu_name}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={true}
          extraData={selectedMenu}
          keyExtractor={(item, index) => item._id || index.toString()}
        />
      </View>
    </View>
  );

  const [restaurantInfo, setRestaurantInfo] = React.useState([]);

  React.useEffect(() => {
    const sortedRestaurants = restaurant_info.sort(
      (a, b) => b.rating - a.rating
    );
    setRestaurantInfo(sortedRestaurants);
  }, []);

  const navigateToRestaurant = (restaurant) => {
    navigation.navigate("RestaurantDetail", { restaurant });
  };

  return (
    <View style={styles.content}>
      <Header />
      <FlatList
        data={restaurantInfo}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.restaurant_id}
            style={styles.restaurantCard}
            onPress={() => navigateToRestaurant(item)}
          >
            <Image source={item.image} style={styles.restaurantImage} />
            <View style={styles.overlayIcons}>
              <TouchableOpacity>
                <Icon
                  name={item.isFav ? "bookmark" : "bookmark-outline"}
                  size={20}
                  color={item.isFav ? "#FF4C24" : "#fff"}
                />
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
  activeFood: {
    borderWidth: 3,
    borderColor: "#FF4C24",
  },
  content: {
    flex: 8,
  },
  card: {
    height: 275,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
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