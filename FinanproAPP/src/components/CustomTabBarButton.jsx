// src/components/CustomTabBarButton.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AddOpcao from '../screens/AddOpcao';

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      {/* Botão da Tab Bar */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {children}
      </TouchableOpacity>
      
      {/* Botão Flutuante */}
      <AddOpcao style={styles.fab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'transparent',
  },
  fab: {
    position: 'absolute',
    right: '50%',
    bottom: 16,
    backgroundColor: '#E9446A', // Cor do botão flutuante
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    transform: [{ translateX: 30 }], // Ajusta o botão flutuante para centralizar
  },
});

export default CustomTabBarButton;
