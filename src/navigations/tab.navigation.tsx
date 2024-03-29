import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilScreen, MapScreen, qrCodeScreen, CameraScreen, ArquivoScreen
 } from "../screens";
import colors from "../styles/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ChatNavigation from "./chat.navigation"


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
      
    </Tab.Navigator>
  );
}