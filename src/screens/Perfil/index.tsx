import React, {useEffect,useState} from "react";
import { View, Text, ImageBackground, Image, Alert } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";
import { ButtonComp, CardSocialComp } from "../../components";
import { useAuth } from "../../hook/auth";
import { IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from "../../services/data/Push";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Perfil() {
  const {user, signOut}=useAuth();
  useEffect(() => {
    async function fetchToken(){
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  },[]);
  
  async function logout() {
    try {
        await signOut();
    }catch (error) {
        const err = error as AxiosError;
        const data = err.response?.data as IUser;
        let message = "";
        if (data.data) {
            for (const [key, value] of Object.entries(data.data)) {
                message = `${message} ${value}`;
            }
        }
        Alert.alert(`${data.message} ${message}`);
    }
}
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/perfil.png")} />
        <Text style={styles.title}>{user?.name}</Text>
      <CardSocialComp>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <Text style={styles.link}>https://linkedin.com</Text>
        </>
      </CardSocialComp>
      <Button
        title="Alterar Senha"
        type="primary"
        onPress={() => console.log("Alterar Senha")}
      />
      <Button title="Sair" type="primary" onPress={logout} />
    </View>
  );
}