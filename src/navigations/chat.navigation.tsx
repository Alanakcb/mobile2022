import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatStackParamList } from "../types/Screen.types";
import { ChatScreen, CameraScreen, EnviarMensagemScreen } from "../screens";
import DrawerNavigation from "./drawer.navigation";

const Stack = createStackNavigator<ChatStackParamList>();

export default function ChatNavigation(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Chat" component={ChatScreen}/>
            <Stack.Screen name="Camera" component={CameraScreen}/>
            <Stack.Screen name="EnviarMensagem" component={EnviarMensagemScreen} />
        </Stack.Navigator>
    );
}