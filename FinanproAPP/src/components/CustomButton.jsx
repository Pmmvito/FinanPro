import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles'; // Certifique-se de que o caminho esteja correto

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
