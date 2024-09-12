import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Modificado para acomodar a barra de navegação no final
    backgroundColor: '#e0f7fa', // Cor de fundo da tela
    padding: 20, // Ajustado para não interferir com a barra de navegação
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: '#00796b',
    position: 'absolute', // Posicionado absolutamente para não ser afetado pelo fluxo do layout
    top: 30, // Posicionado no topo com espaçamento
    alignSelf: 'center', // Centraliza no topo
  },
  userText: {
    fontSize: 20,
    marginBottom: 25,
    color: '#004d40',
    position: 'absolute', // Posicionado absolutamente
    top: 70, // Abaixo do título
    alignSelf: 'center', // Centraliza
  },
  buttonContainer: {
    marginVertical: 15,
    width: 220,
    borderRadius: 10,
    backgroundColor: '#004d40',
    overflow: 'hidden',
    alignItems: 'center',
    position: 'absolute', // Posicionado absolutamente
    bottom: 120, // Acima do navigation
    alignSelf: 'center', // Centraliza horizontalmente
  },
  input: {
    height: 45,
    borderColor: '#004d40',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 25,
    width: 260,
    backgroundColor: '#ffffff',
    position: 'absolute', // Posicionado absolutamente
    bottom: 160, // Acima do botão
    alignSelf: 'center', // Centraliza
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 90, // Ajustado para não sobrepor a barra de navegação
    backgroundColor: '#f59330',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 0 },
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingBottom: 10,
    paddingTop: 10,
    height: 50, // Define a altura da barra de navegação
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  placeholderButton: {
    width: 60, // Mantém o layout balanceado
  }
});
