import React, {useEffect, useState} from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {CardComp, LoadingComp} from "../../components";
import {ChatTypes} from "../../types/Screen.types";
import {apiMensagem} from "../../services/data";
import {IMensagemState} from "../../interfaces/Mensagem.interface";
import styles from "./styles";

export default function Chat({navigation}:ChatTypes) {
  const [isLoading, setIsLoading] = useState(true);
  const [mensagem, setMensagem] = useState<IMensagemState[]>([]);
  function handleChat() {
    navigation.navigate("EnviarMensagem");
  }

  useEffect(() => {
    async function loadMensagem() {
      const response = await apiMensagem.index();
      console.log(response.data.data);
      setMensagem(response.data.data);
      setIsLoading(false);
    }
    navigation.addListener("focus", () => loadMensagem());
  },[]);

  const renderItem = ({ item }) => <CardComp data={item} />;
  return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.rowSearch}>
            <FontAwesome5 name="search" style={styles.icon} />
            <TextInput placeholder="Pesquisar chat" style={styles.input} />
          </View>
          {mensagem.length > 0 && (
            <FlatList
              data={mensagem}
              renderItem={renderItem}
              keyExtractor={(item) => String(item.id)}
              style={styles.list}
            />
          )}
          <TouchableOpacity style={styles.button} onPress={handleChat}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
  );
}