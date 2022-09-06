import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hook/auth";
import ChatNavigation from "./chat.navigation";
import DrawerNavigation from "./drawer.navigation";

export default function Navigation() {
  const {access_token}=useAuth();
  return (
    <NavigationContainer>
      {access_token ? <DrawerNavigation /> : <ChatNavigation/>} 
    </NavigationContainer>
  );
}
//é aq que ele sabe em qual tela você está