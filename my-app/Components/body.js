import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function Body() {
  return (
    <View style={styles.bodyContainer}>
      {/* Greeting Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <View style={styles.avatar}>
          <Image
            source={require("../assets/HuyenImage.jpg")} // Replace with your actual image path
            style={styles.avatarImage}
          />
        </View>
      </View>
      <Text style={styles.insightTextTitle}>Your Insights </Text>

      {/* Insights Section */}
      <View style={styles.insights}>
        {/* First Insight */}
        <TouchableOpacity style={styles.insightBox}>
          <View style={[styles.iconContainer, { backgroundColor: "#D1C4E9" }]}>
            <Image
              source={require("../assets/ScanNewIcon.png")} // Replace with your actual icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.insightText}>Scan new</Text>
          <Text style={styles.insightCount}>Scanned 483</Text>
        </TouchableOpacity>

        {/* Second Insight */}
        <TouchableOpacity style={styles.insightBox}>
          <View style={[styles.iconContainer, { backgroundColor: "#FFE0B2" }]}>
            <Image
              source={require("../assets/CheckIcon.png")} // Replace with your actual icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.insightText}>Counterfeits</Text>
          <Text style={styles.insightCount}>Counterfeited 32</Text>
        </TouchableOpacity>

        {/* Third Insight */}
        <TouchableOpacity style={styles.insightBox}>
          <View style={[styles.iconContainer, { backgroundColor: "#C8E6C9" }]}>
            <Image
              source={require("../assets/CheckIcon.png")} // Replace with your actual icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.insightText}>Success</Text>
          <Text style={styles.insightCount}>Checkouts 8</Text>
        </TouchableOpacity>

        {/* Fourth Insight */}
        <TouchableOpacity style={styles.insightBox}>
          <View style={[styles.iconContainer, { backgroundColor: "#BBDEFB" }]}>
            <Image
              source={require("../assets/DirectoryIcon.png")} // Replace with your actual icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.insightText}>Directory</Text>
          <Text style={styles.insightCount}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore More Section */}
      <TouchableOpacity style={styles.exploreMore}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Body;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: "20%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 52,
  },
  avatar: {
    width: 47,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  insightTextTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 30,
    marginTop: 30,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  insights: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  insightBox: {
    width: "48%",
    backgroundColor: "#F8F8FB",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center", // Center everything horizontally
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Rounded corners for the icon box
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  insightText: {
    color: "black",
    fontSize: 16,
    fontWeight: 480,
    marginBottom: 5,
    textAlign: "center", // Center-align text
  },
  insightCount: {
    fontSize: 10,
    color: "#888",
    textAlign: "center", // Center-align text
  },
  exploreMore: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  exploreText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  arrow: {
    fontSize: 18,
    color: "#888",
  },
});
