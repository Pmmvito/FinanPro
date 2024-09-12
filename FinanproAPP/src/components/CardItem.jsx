import React from 'react';
import { View, Text, StyleSheet, Dimensions,  TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Obtendo a largura total da tela
const { width } = Dimensions.get('window');

// Componente Card Dinâmico
const Card = ({ icon, title, description, value, status, date, tags }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <AntDesign name={icon} size={24} color="#00796b" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width: width - 10, // Margem de 10px em cada lado para espaçamento
    height: 72,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  iconContainer: {
    paddingRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#777',
  },
  details: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00796b',
  },
  status: {
    fontSize: 12,
    color: status => (status === 'Pago' ? 'green' : 'red'),
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: 10,
    color: '#fff',
    backgroundColor: '#00796b',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginRight: 5,
  },
});

export default Card;
