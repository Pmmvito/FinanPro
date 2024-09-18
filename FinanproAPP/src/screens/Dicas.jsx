// src/screens/Dicas.js
import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";

const Dicas = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.screenContainer}>
          <Text style={styles.text}>((FALTA AS DICAS))</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f7fa',
        padding: 20,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00796b',
        marginVertical: 10,
    },
});

export default Dicas;
