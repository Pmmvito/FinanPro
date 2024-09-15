// src/screens/AddOpcao.js
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const AddOpcao = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation(); 

  const navigateToAddReceita = () => {
    setModalVisible(false);
    navigation.navigate("AddReceita");
  };

  const navigateToAddDespesas = () => {
    setModalVisible(false);
    navigation.navigate("AddDespesas");
  };


  return (
    <View style={styles.container}>
      {/* Modal com opções */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.menu}>
            <TouchableOpacity onPress={navigateToAddReceita} style={styles.menuItem}>
              {/* <AntDesign name="pluscircleo" size={20} color="white" /> */}
              <Text style={styles.menuText}>Calculadora de Juros Composto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToAddDespesas} style={styles.menuItem}>
              {/* <AntDesign name="minuscircleo" size={20} color="white" /> */}
              <Text style={styles.menuText}>Calculadora de Juros Simples </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Botão Flutuante Central */}
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#7b147b",
    borderRadius: 60,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menu: {
    backgroundColor: "#7b147b",
    borderRadius: 10,
    padding: 30,
    width: 400,
    alignItems: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  menuText: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
  },
});

export default AddOpcao;
