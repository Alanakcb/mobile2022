import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, PerfilScreen, MapScreen, qrCodeScreen 
 } from "../screens";
import colors from "../styles/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerContent } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.black,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () =>(
            <Ionicons name ="map" size={24} color={colors.white}/>
          ),
        }}
      />
      <Tab.Screen
        name="QrCode"
        component={qrCodeScreen}
        options={{
         tabBarIcon: () => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}