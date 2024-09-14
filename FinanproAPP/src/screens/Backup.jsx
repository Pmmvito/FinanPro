import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [documentacao, setDocumentacao] = useState("");

  // Função para salvar a documentação no AsyncStorage
  const salvarDocumentacao = async () => {
    try {
      const doc = "Documentação do app salva.";
      await AsyncStorage.setItem("@documentacao", doc);
      Alert.alert("Sucesso", "Documentação salva com sucesso!");
    } catch (e) {
      Alert.alert("Erro", "Falha ao salvar documentação.");
    }
  };

  // Função para recuperar e enviar a documentação
  const enviarDocumentacao = async () => {
    try {
      const doc = await AsyncStorage.getItem("@documentacao");
      if (doc !== null) {
        Alert.alert("Sucesso", `Enviando: ${doc}`);
        // Simular envio da documentação, ex.: API ou outro processo
      } else {
        Alert.alert("Erro", "Nenhuma documentação encontrada para enviar.");
      }
    } catch (e) {
      Alert.alert("Erro", "Falha ao enviar documentação.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={salvarDocumentacao}>
        <Text style={styles.buttonText}>Salvar Documentação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonGreen]}
        onPress={enviarDocumentacao}
      >
        <Text style={styles.buttonText}>Enviar Documentação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#007BFF", // Cor do botão
    borderRadius: 8, // Borda arredondada
    paddingVertical: 15, // Espaçamento vertical interno
    paddingHorizontal: 25, // Espaçamento horizontal interno
    marginVertical: 10, // Espaçamento vertical entre os botões
    alignItems: "center",
    width: "80%", // Largura do botão
  },
  buttonGreen: {
    backgroundColor: "#28a745", // Cor do botão verde
  },
  buttonText: {
    color: "#fff", // Cor do texto
    fontSize: 16, // Tamanho da fonte
    fontWeight: "bold", // Negrito
  },
});

export default App;
