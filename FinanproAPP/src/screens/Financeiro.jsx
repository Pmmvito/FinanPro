// src/screens/Financeiro.js
import React from "react";
import { View, Text, ScrollView, SafeAreaView, } from "react-native";
import styles from "../styles/styles";
import ReceitaCard from "../components/ReceitaCard";
import DespesaCard from "../components/DespesaCard";

const Financeiro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Receitas</Text>
          <ReceitaCard
            icon="shoppingcart"
            title="Compra no Mercado"
            description="Compras realizadas no mercado"
            value="R$ 250,00"
            status="Não Pago"
            date="12/09/2024"
            tags={["Alimentos", "Supermercado"]}
          />

          <Text style={styles.title}>Despesas</Text>
          <DespesaCard
            icon="creditcard"
            title="Conta de Luz"
            description="Pagamento da conta de luz"
            value="R$ 120,00"
            status="Pago"
            date="10/09/2024"
            tags={["Utilidades", "Energia"]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Financeiro;
