import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { menu_list, food_list } from "../assets/assets";

export default function Content() {
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
                selectedMenu === item.menu_name && styles.activeFood,
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

  return (
    <View style={styles.content}>
      <FlatList
        data={food_list}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <View key={item._id} style={styles.foodCard}>
            <Image source={item.image} style={styles.foodImage} />
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodDescription}>{item.description}</Text>
              <Text style={styles.foodPrice}>${item.price}</Text>
            </View>
          </View>
        )}
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
  foodCard: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    margin: 10,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  foodInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
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
});