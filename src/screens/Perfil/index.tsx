import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/perfil.png")} />
      <Text style={styles.title}>Alana Karine C. Borges</Text>
      <CardSocial>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <Text style={styles.link}>https://linkedin.com</Text>
        </>
      </CardSocial>
      <Button
        title="Alterar Senha"
        type="primary"
        onPress={() => console.log("Alterar Senha")}
      />
      <Button title="Sair" type="primary" onPress={() => console.log("Sair")} />
    </View>
  );
}