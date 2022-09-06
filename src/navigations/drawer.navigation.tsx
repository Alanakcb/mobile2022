import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ChatScreen, CameraScreen } from "../screens";
import colors from "../styles/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.primary,
        drawerStyle: { backgroundColor: colors.primary },
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          drawerLabel:"Câmera",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="camera"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}