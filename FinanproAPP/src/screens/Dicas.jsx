import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CdiMensal = () => {
    const [cdi, setCdi] = useState(null);
    const [selic, setSelic] = useState(null);
    const [exchangeRates, setExchangeRates] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cdiResponse = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4391/dados?formato=json');
                const cdiData = await cdiResponse.json();
                const selicResponse = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json');
                const selicData = await selicResponse.json();
                const exchangeResponse = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
                const exchangeData = await exchangeResponse.json();

                const latestCdi = cdiData[cdiData.length - 1];
                const latestSelic = selicData[selicData.length - 1];

                setCdi(latestCdi ? latestCdi.valor : 'N/A');
                setSelic(latestSelic ? latestSelic.valor : 'N/A');
                setExchangeRates(exchangeData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>CDI do Mês Atual: {cdi}</Text>
            <Text style={styles.text}>SELIC do Mês Atual: {selic}</Text>
            <Text style={styles.text}>Dólar (USD/BRL): {exchangeRates.USDBRL?.bid}</Text>
            <Text style={styles.text}>Euro (EUR/BRL): {exchangeRates.EURBRL?.bid}</Text>
            <Text style={styles.text}>Bitcoin (BTC/BRL): {exchangeRates.BTCBRL?.bid}</Text>
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

export default CdiMensal;