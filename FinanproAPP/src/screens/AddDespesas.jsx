import { View, Text, Button } from "react-native";
import styles from '../styles/styles';
import CustomButton from "../components/CustomButton";

export default function AddDespesas({navigation}) {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Tela de Despesas"
        onPress={() => navigation.navigate("Home")}
      />
      <Text>Tela de Despesas</Text>
    </View>
  );
}
