import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PerfilScreen, MapScreen, qrCodeScreen, CameraScreen, ArquivoScreen, SairScreen, ChatScreen, VideoAudioScreen, AcelerometroScreen, 
  PedometroScreen
} from "../screens";
import colors from "../styles/colors";
import { Ionicons, MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import ChatNavigation from "./chat.navigation"

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primaryLight },
        headerTintColor: colors.primary,
        drawerStyle: { backgroundColor: colors.primary },
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
        name="Sair"
        component={SairScreen}
        options={{
        drawerLabel: "Sair",
          drawerIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
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
      <Drawer.Screen
        name="Map"
        component={MapScreen}
        options={{
          drawerIcon: () =>(
            <Ionicons name ="map" size={24} color={colors.white}/>
          ),
        }}
      />
      <Drawer.Screen
        name="QrCode"
        component={qrCodeScreen}
        options={{
         drawerIcon: () => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="camera"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Arquivos"
        component={ArquivoScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="file-account"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ChatNavigation"
        component={ChatNavigation}
        options={{
          title: "Chat",
          drawerIcon: () => (
            <Ionicons 
              name="chatbubbles" 
              size={24} 
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AudioVideo"
        component={VideoAudioScreen}
        options={{
          drawerLabel:"Áudio Vídeo",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="video"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="Acelerometro"
        component={AcelerometroScreen}
        options={{
          drawerLabel: "Acelerômetro",
          drawerIcon: () => (
            <FontAwesome
              name="car"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="Pedometro"
        component={PedometroScreen}
        options={{
          drawerLabel: "Pedômetro",
          drawerIcon: () => (
            <Foundation
              name="foot"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}