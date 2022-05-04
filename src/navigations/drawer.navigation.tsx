import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ChatScreen, PerfilScreen } from "../screens";
import colors from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        drawerStyle: { backgroundColor: colors.secondary },
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}