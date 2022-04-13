import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from "react-native";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";

export default function Cadastrar() {
  async function handleSignIn() {
    console.log("Cadastrar");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <KeyboardAvoidingView>
          <Text style={styles.title}>Cadastre-se</Text>
          <View style={styles.formRow}>
            <Ionicons name="person" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Nome" />
          </View>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Button title="Login" type="pink" onPress={handleSignIn} />
          <Button title="Cadastre-se" type="black" onPress={handleSignIn} />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}