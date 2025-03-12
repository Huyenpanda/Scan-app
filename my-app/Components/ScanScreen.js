import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanScreen() {
  const navigation = useNavigation(); // Hook for navigation actions

  return (
    <ImageBackground
      source={require("../assets/orangebottle.png")} // Background image path
      style={styles.container}
    >
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.backButtonBox}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Scanning Overlay */}
      <View style={styles.scanOverlay}>
        <Image
          source={require("../assets/scan.png")} // Path to your scan image
          style={styles.scanImage}
        />
      </View>

      {/* Product Details Section */}
      <View style={styles.productDetails}>
        <Image
          source={require("../assets/orangebottle.png")} // Product thumbnail image path
          style={styles.thumbnail}
        />
        <Text style={styles.productLabel}>Lauren's Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginTop:"10%",
    backgroundColor: "transparent", // Ensures the header blends with the background
  },
  backButtonBox: {
    width: 45,
    height: 45,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2, // Adds shadow for Android
  },
  scanOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanImage: {
    width: 200,
    height: 200,
    resizeMode: "contain", // Ensures the scan image is proportionally scaled
  },
  productDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Adds a slight transparency
    padding: 15,
    margin: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3, // Shadow effect for Android
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  productLabel: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginHorizontal: 10,
  },
  addButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 20,
  },
  addButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
