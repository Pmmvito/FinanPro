import React from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/styles';

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
    </TouchableOpacity>
  );
};

export default Card;
