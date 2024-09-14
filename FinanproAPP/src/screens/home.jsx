import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [50, 100, 150, 200, 250, 300],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Controle Financeiro</Text>
        <Text style={styles.balance}>Saldo do Mês Atual</Text>
        <Text style={styles.balanceAmount}>R$ 1.234,56</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gráficos</Text>
        <View style={styles.chartContainer}>
          <LineChart
            data={data}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(33, 33, 33, ${opacity})`,
            }}
            bezier
            style={styles.chart}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Receitas</Text>
        <View style={styles.card}>
          <Text style={styles.amount}>R$ 2.000,00</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Despesas</Text>
        <View style={styles.card}>
          <Text style={styles.amount}>R$ 765,44</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
  },
  balance: {
    fontSize: 18,
    color: '#777',
    marginVertical: 5,
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: '700',
    color: '#4caf50',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  chartContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    borderRadius: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'center',
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
});

export default HomeScreen;
