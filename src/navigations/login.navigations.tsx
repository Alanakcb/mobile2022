import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, CadastrarScreen } from "../screens";
import { LoginStackParamList } from "../types/Screen.types";

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
    </Stack.Navigator>
  );
}