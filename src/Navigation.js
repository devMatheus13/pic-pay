import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/home";
import WalletScreen from "./screens/wallet";
import PayScreen from "./screens/pay";
import PayButton from "./components/PayButton";
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },
  Notifications: {
    lib: AntDesign,
    name: "home",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Pay") {
            return <PayButton 
            onPress={() => navigation.navigate("Pay")} 
            focused={focused}
            />;
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255,255,255,0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{ title: "Início" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Wallet"
        options={{ title: "Carteira" }}
        component={WalletScreen}
      />
      <Tab.Screen name="Pay" options={{ title: "" }} component={PayScreen} />
      <Tab.Screen
        name="Notifications"
        options={{ title: "Notificação" }}
        component={PayScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{ title: "Ajustes" }}
        component={PayScreen}
      />
    </Tab.Navigator>
  );
}
