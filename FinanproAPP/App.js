// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home';
import Financeiro from './src/screens/Financeiro';
import AddOpcao from './src/screens/AddOpcao';
import Dicas from './src/screens/Dicas';
import Backup from './src/screens/Backup';
import AddReceita from './src/screens/AddReceita'; 
import AddDespesas from './src/screens/AddDespesas';
import AvistaOuParcelado from './src/screens/AvistaOuParcelado';
import CustomTabBarButton from './src/components/CustomTabBarButton';
import styles from './src/styles/styles';
import { Modal } from 'react-native-paper';

// Cria o Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="AddReceita" component={AddReceita} /> 
        <Stack.Screen name="AddDespesas" component={AddDespesas} /> 
        <Stack.Screen name="AvistaOuParcelado" component={AvistaOuParcelado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
        ...styles.shadow,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Financeiro"
      component={Financeiro}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="wallet-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="none"
      component={Modal}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="add-circle-outline" color="#fff" size={30} />
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      }}
    />
    <Tab.Screen
      name="Dicas"
      component={Dicas}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="bulb-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Backup"
      component={Backup}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="cloud-upload-outline" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default App;
