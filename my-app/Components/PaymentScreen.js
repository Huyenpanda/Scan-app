import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.backButtonBox}>
              <Ionicons name="chevron-back" size={24} color="#4CAF50" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.checkoutHeader}>
          <Text style={styles.checkoutTitle}>Checkout <Text style={styles.cardIcon}>💳</Text></Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>₹ 1,527</Text>
            <Text style={styles.taxText}>Including GST (18%)</Text>
          </View>
        </View>

        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.paymentOptionActive}>
            <Text style={styles.paymentOptionTextActive}>
              <Ionicons name="card-outline" size={16} /> Credit card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption}>
            <Text style={styles.paymentOptionText}>
              <Image
                source={require("../assets/Apple icon.png")}
                style={styles.applePayIcon}
              />
              Apple Pay
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.formLabel}>Card number</Text>
          <View style={styles.cardNumberContainer}>
            <TextInput
              style={styles.cardInput}
              value="5261 4141 0151 8472"
              editable={false}
            />
            <Image
              source={require("../assets/MasterCardLogo.png")}
              style={styles.cardTypeIcon}
            />
            <Ionicons name="scan-outline" size={24} color="#888" />
          </View>

          <Text style={styles.formLabel}>Cardholder name</Text>
          <TextInput
            style={styles.input}
            value="Christie Doe"
            editable={false}
          />

          <View style={styles.dateAndCVV}>
            <View style={styles.halfInput}>
              <Text style={styles.formLabel}>Expiry date</Text>
              <TextInput
                style={styles.input}
                value="06 / 2024"
                editable={false}
              />
            </View>
            <View style={styles.halfInput}>
              <View style={styles.cvvHeader}>
                <Text style={styles.formLabel}>CVV / CVC</Text>
                <TouchableOpacity>
                  <Ionicons name="help-circle-outline" size={20} color="#ccc" />
                </TouchableOpacity>
              </View>
              <TextInput style={styles.input} value="915" editable={false} />
            </View>
          </View>
        </View>

        <Text style={styles.notice}>
          We will send you an order details to your email after the successfull payment
        </Text>

        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate("Success")}
        >
          <Ionicons name="lock-closed" size={18} color="white" />
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </TouchableOpacity>

        <View style={styles.homeIndicator} />
      </KeyboardAvoidingView>
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
  checkoutHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  checkoutTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardIcon: {
    fontSize: 20,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  taxText: {
    fontSize: 12,
    color: "#888",
  },
  paymentOptions: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  paymentOptionActive: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  paymentOption: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  paymentOptionTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  paymentOptionText: {
    color: "#000",
    fontWeight: "500",
  },
  applePayIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  form: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  cardNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardInput: {
    flex: 1,
    fontSize: 16,
  },
  cardTypeIcon: {
    width: 40,
    height: 20,
    marginHorizontal: 20,
    
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  dateAndCVV: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  cvvHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notice: {
    textAlign: "center",
    color: "#888",
    fontSize: 12,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    padding: 18,
    margin: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  homeIndicator: {
    alignSelf: "center",
    width: 100,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    marginVertical: 10,
  },
});