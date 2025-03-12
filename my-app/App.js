import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons, FontAwesome, Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Body from "./Components/body"; 
import ScanScreenComponent from "./Components/ScanScreen";

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
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Hide headers for all tab screens
          tabBarIcon: ({ focused }) => {
            let iconName;
            let IconComponent = MaterialIcons;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Notification") {
              IconComponent = FontAwesome;
              iconName = "bell";
            } else if (route.name === "Scan") {
              return (
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: focused ? "#D0EDFB" : "#fff" },
                  ]}
                >
                  <Ionicons
                    name="scan-sharp"
                    size={30}
                    color={focused ? "#2DC0FF" : "#BBBB"}
                  />
                </View>
              );
            }

            return (
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: focused ? "#D0EDFB" : "#fff" },
                ]}
              >
                <IconComponent
                  name={iconName}
                  size={30}
                  color={focused ? "#2DC0FF" : "#BBBB"}
                />
              </View>
            );
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Notification" component={PlaceholderScreen} />
        <Tab.Screen name="Scan" component={ScanScreenComponent} />
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
    paddingTop: "8%",
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