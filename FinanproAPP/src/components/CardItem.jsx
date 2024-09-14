import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/styles';

const CardItem = ({ icon, title, description, value, status, date, tags, onEdit, onDelete }) => {
  return (
    <View style={[styles.card, styles.shadow]}>
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
      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
          <AntDesign name="edit" size={24} color="#4caf50" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.actionButton}>
          <AntDesign name="delete" size={24} color="#f44336" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    padding: 10,
  },
});

export default CardItem;
