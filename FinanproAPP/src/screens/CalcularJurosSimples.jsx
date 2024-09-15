import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CalcularJurosSimples = () => {
    const navigation = useNavigation();
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [result, setResult] = useState('');

    const calculateCompoundInterest = () => {
        const P = parseFloat(principal);
        const r = parseFloat(rate) / 100;
        const t = parseFloat(time);
        const A = P * Math.pow((1 + r), t);
        setResult(A.toFixed(2));
    };

    return (
        <View style={styles.container}>


            <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
            <Text style={styles.title}>AvistaOuParcelado</Text>
            <TextInput
                style={styles.input}
                placeholder="Valor"
                keyboardType="numeric"
                value={principal}
                onChangeText={setPrincipal}
            />
            <TextInput
                style={styles.input}
                placeholder="Taxa Mensal  (%)"
                keyboardType="numeric"
                value={rate}
                onChangeText={setRate}
            />
            <TextInput
                style={styles.input}
                placeholder="Tempo (Meses)"
                keyboardType="numeric"
                value={time}
                onChangeText={setTime}
            />
            <Button title="Calculate" onPress={calculateCompoundInterest} />
            {result && !isNaN(time) ? <Text style={styles.result}>Em {time} meses voce tera: {result}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        width: '100%',
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        color: 'green',
    },
});

export default CalcularJurosSimples;