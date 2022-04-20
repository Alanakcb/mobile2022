import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./styles";

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/perfil.png")} />
        <Text>Alana Karine C. Borges</Text>
    </View>
  );
}