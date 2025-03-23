import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function SuccessScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backButtonBox}>
            <Ionicons name="chevron-back" size={24} color="#6979F8" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.illustrationContainer}>
          <Image
            source={require("../assets/PaymentSuccess.png")}
            style={styles.terminalImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.successTitle}>Payment Success, Yayy!</Text>
        
        <Text style={styles.successMessage}>
          we will send order details and invoice in your contact no. and registered email
        </Text>

        <TouchableOpacity 
          style={styles.detailsButton}
          onPress={() => {/* Navigate to order details */}}
        >
          <Text style={styles.detailsButtonText}>Check Details</Text>
          <Ionicons name="arrow-forward" size={20} color="#6979F8" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.downloadButton}
          onPress={() => {/* Download invoice functionality */}}
        >
          <Text style={styles.downloadButtonText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
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
    elevation: 2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  illustrationContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F1FF",
    borderRadius: 100,
    marginBottom: 30,
  },
  terminalImage: {
    width: 280,
    height: 250,
    marginBottom:100,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  successMessage: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },
  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  detailsButtonText: {
    fontSize: 16,
    color: "#6979F8",
    fontWeight: "bold",
    marginRight: 5,
  },
  downloadButton: {
    backgroundColor: "#6979F8",
    borderRadius: 30,
    padding: 18,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  homeIndicator: {
    alignSelf: "center",
    width: 100,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    marginBottom: 10,
  },
});