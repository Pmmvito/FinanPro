import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalcularJurosCompostos = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [months, setMonths] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [result, setResult] = useState(null);

    const calculateCompoundInterest = () => {
        const P = parseFloat(principal);
        const r = parseFloat(rate) / 100 / 12;
        const n = parseInt(months);
        const C = parseFloat(monthlyContribution);

        let total = P;
        for (let i = 0; i < n; i++) {
            total = (total + C) * (1 + r);
        }

        setResult(total.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de Juros Compostos</Text>
            <View style={styles.inputContainer}>
                <Text>Capital Inicial:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={principal}
                    onChangeText={setPrincipal}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Taxa de Juros Anual (%):</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={rate}
                    onChangeText={setRate}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Período (meses):</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={months}
                    onChangeText={setMonths}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Aporte Mensal:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={monthlyContribution}
                    onChangeText={setMonthlyContribution}
                />
            </View>
            <Button title="Calcular" onPress={calculateCompoundInterest} />
            {result !== null && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Resultado: R$ {result}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 8,
    },
    resultContainer: {
        marginTop: 20,
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CalcularJurosCompostos;