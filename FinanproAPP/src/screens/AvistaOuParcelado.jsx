import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const AvistaOuParcelado = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { id: items.length.toString(), value: `Item ${items.length + 1}` }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Itens</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Adicionar Item" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#ccc',
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginVertical: 5,
  },
});

export default AvistaOuParcelado;
