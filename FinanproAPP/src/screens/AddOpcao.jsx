// src/screens/AddOpcao.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const AddOpcao = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Inicializa o hook de navegação

  const navigateToAddReceita = () => {
    setModalVisible(false);
    navigation.navigate('AddReceita'); // Navega para a tela AddReceita
  };
  const navigateToAddDespesas = () => {
    setModalVisible(false);
    navigation.navigate('AddDespesas'); // Navega para a tela AddDespesas
  };

  return (
    <View style={styles.container}>
      {/* Modal com opções */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={navigateToAddReceita} style={styles.menuItem}>
              <AntDesign name="pluscircleo" size={20} color="white" />
              <Text style={styles.menuText}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToAddDespesas} style={styles.menuItem}>
              <AntDesign name="minuscircleo" size={20} color="white" />
              <Text style={styles.menuText}>Despesa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Botão Flutuante */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    left: '1%', // Centraliza horizontalmente
    bottom: 16,
    backgroundColor: '#E9446A', // Cor do botão flutuante
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    transform: [{ translateX: -30 }], // Ajusta o botão flutuante para centralizar
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menu: {
    backgroundColor: '#004d40',
    borderRadius: 10,
    padding: 15,
    width: 200, // Ajuste conforme necessário
    alignItems: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default AddOpcao;
