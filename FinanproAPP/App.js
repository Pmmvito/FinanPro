import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Barra de Navegação na Parte Inferior */}
      <View style={styles.navigation}>
        {/* Botão Home */}
        <TouchableOpacity style={styles.navButton}>
          <Text>Home</Text>
        </TouchableOpacity>

        {/* Espaço vazio para equilíbrio visual */}
        <View style={styles.placeholderButton} />

        {/* Botão Add Despesas */}
        <TouchableOpacity style={styles.navButton}>
          <Text>Add Despesas</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Flutuante */}
      <TouchableOpacity 
        style={styles.floatingButton} 
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>

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
            <MenuItem icon="pluscircleo" title="Receita" />
            <MenuItem icon="minuscircleo" title="Despesa" />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const MenuItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <AntDesign name={icon} size={20} color="white" />
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingBottom: 10,
    paddingTop: 10,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  placeholderButton: {
    width: 60,
  },
  floatingButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    backgroundColor: '#FFA500',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#FFA523',
    borderRadius: 10,
    padding: 15,
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
  }
});

export default App;
