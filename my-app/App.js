import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons, FontAwesome, Ionicons, Feather } from "@expo/vector-icons";

import Body from "./Components/body";
import ScanScreenComponent from "./Components/ScanScreen";
import PaymentScreen from "./Components/PaymentScreen";
import SuccessScreen from "./Components/SuccessScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PlaceholderScreen() {
  return <Body />;
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false // Hide headers in the stack navigator
      }}
    >
      <Stack.Screen name="HomeScreen" component={PlaceholderScreen} />
      <Stack.Screen name="ScanScreen" component={ScanScreenComponent} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused }) => {
            const backgroundColor = focused ? "#D0EDFB" : "#fff";
            const iconColor = focused ? "#2DC0FF" : "#BBBB";

            if (route.name === "Home") {
              return (
                <View style={[styles.iconContainer, { backgroundColor }]}>
                  <MaterialIcons name="home" size={25} color={iconColor} />
                </View>
              );
            } 
            
            if (route.name === "Scan") {
              return (
                <View style={[styles.iconContainer, { backgroundColor }]}>
                  <Ionicons name="scan-sharp" size={25} color={iconColor} />
                </View>
              );
            } 
            
            if (route.name === "Notification") {
              return (
                <View style={[styles.iconContainer, { backgroundColor }]}>
                  <FontAwesome name="bell" size={25} color={iconColor} />
                </View>
              );
            } 
            
            if (route.name === "Payment") {
              return (
                <View style={[styles.iconContainer, { backgroundColor }]}>
                  <Feather name="credit-card" size={25} color={iconColor} />
                </View>
              );
            } 
            
            if (route.name === "Success") {
              return (
                <View style={[styles.iconContainer, { backgroundColor }]}>
                  <Feather name="check-circle" size={25} color={iconColor} />
                </View>
              );
            }

            return null;
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Scan" component={ScanScreenComponent} />
        <Tab.Screen name="Notification" component={PlaceholderScreen} />
        <Tab.Screen name="Payment" component={PaymentScreen} />
        <Tab.Screen name="Success" component={SuccessScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    height: 118,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: 20,
    borderWidth: 0.5,
  },
  iconContainer: {
    width: 47,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#fff",
  },
});