import React from "react";
import { View, Text } from "react-native";
import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles";

export default function CardSocial({ data }: CardProps) {
  return (
    <View style={styles.card}>
      <Text>
        {data.nome} - {data.data}
      </Text>
      <View style={styles.msg}>
        <Text>Título: {data.titulo}</Text>
        <Text>Mensagem: {data.mensagem}</Text>
        <View style={styles.topicos}>
          {data.topico.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
