import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Modal, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const [balance, setBalance] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [isIncome, setIsIncome] = useState(true);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [monthlyBalances, setMonthlyBalances] = useState(Array(12).fill(0));
  const [chartModalVisible, setChartModalVisible] = useState(false);
  const [showIncomeList, setShowIncomeList] = useState(true);

  useEffect(() => {
    loadData();
  }, [currentMonth]);

  useEffect(() => {
    loadMonthlyBalances();
  }, []);

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem(`@transactions_${currentMonth}`);
      if (data !== null) {
        const parsedData = JSON.parse(data);
        setTransactions(parsedData.transactions);
        setBalance(parsedData.balance);
      } else {
        setTransactions([]);
        setBalance(0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadMonthlyBalances = async () => {
    try {
      const balances = [];
      for (let i = 0; i < 12; i++) {
        const data = await AsyncStorage.getItem(`@transactions_${i}`);
        if (data !== null) {
          const parsedData = JSON.parse(data);
          balances.push(parsedData.balance);
        } else {
          balances.push(0);
        }
      }
      setMonthlyBalances(balances);
    } catch (error) {
      console.error(error);
    }
  };

  const saveData = async (newTransactions, newBalance) => {
    try {
      const data = {
        transactions: newTransactions,
        balance: newBalance,
      };
      await AsyncStorage.setItem(`@transactions_${currentMonth}`, JSON.stringify(data));
      loadMonthlyBalances();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = () => {
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      const newTransaction = {
        id: transactions.length + 1,
        name,
        amount: value,
        type: isIncome ? 'Receita' : 'Despesa',
      };
      const newTransactions = [...transactions, newTransaction];
      const newBalance = isIncome ? balance + value : balance - value;
      setTransactions(newTransactions);
      setBalance(newBalance);
      saveData(newTransactions, newBalance);
    }
    setModalVisible(false);
    setName('');
    setAmount('');
  };

  const incomeTransactions = transactions.filter(transaction => transaction.type === 'Receita');
  const expenseTransactions = transactions.filter(transaction => transaction.type === 'Despesa');

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>{item.name} - R$ {item.amount.toFixed(2)}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Controle Financeiro</Text>
        <Text style={styles.balance}>Saldo do Mês Atual</Text>
        <Text style={styles.balanceAmount}>R$ {balance.toFixed(2)}</Text>
        <Button title="Adicionar Receita" onPress={() => { setIsIncome(true); setModalVisible(true); }} />
        <Button title="Adicionar Despesa" onPress={() => { setIsIncome(false); setModalVisible(true); }} />
        <View style={styles.monthNavigation}>
          <Button title="Mês Anterior" onPress={handlePreviousMonth} />
          <Text style={styles.monthText}>{new Date(2021, currentMonth).toLocaleString('default', { month: 'long' })}</Text>
          <Button title="Próximo Mês" onPress={handleNextMonth} />
        </View>
        <Button title="Ver Gráfico" onPress={() => setChartModalVisible(true)} />
        <Button title="Ver Lista de Receitas" onPress={() => setShowIncomeList(true)} />
        <Button title="Ver Lista de Despesas" onPress={() => setShowIncomeList(false)} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{isIncome ? 'Adicionar Receita' : 'Adicionar Despesa'}</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={chartModalVisible}
        onRequestClose={() => setChartModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Saldo Mensal</Text>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  data: monthlyBalances,
                },
              ],
            }}
            width={screenWidth - 40}
            height={220}
            yAxisLabel="R$"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <TouchableOpacity style={styles.button} onPress={() => setChartModalVisible(false)}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <FlatList
        data={showIncomeList ? incomeTransactions : expenseTransactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTransactionItem}
        ListHeaderComponent={() => (
          <Text style={styles.sectionTitle}>{showIncomeList ? 'Receitas' : 'Despesas'}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Fundo mais claro
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40', // Título escuro
  },
  balance: {
    fontSize: 18,
    color: '#6c757d', // Cor suave para o subtítulo
    marginTop: 10,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28a745', // Verde para indicar saldo positivo
    marginTop: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)', // Fundo mais escuro para foco
    padding: 20,
  },
  modalText: {
    fontSize: 22,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#ced4da',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#007bff', // Azul para o botão
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  transactionItem: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#dee2e6',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  transactionText: {
    fontSize: 16,
    color: '#495057', // Cor neutra
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 15,
    marginTop: 20,
  },
  monthNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#495057',
  },
});


export default HomeScreen;