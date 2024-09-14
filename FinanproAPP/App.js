// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home';
import Financeiro from './src/screens/Financeiro';
import AddOpcao from './src/screens/AddOpcao';
import Dicas from './src/screens/Dicas';
import Backup from './src/screens/Backup';
import styles from './src/styles/styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
          name="AddOpcao"
          component={AddOpcao}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="add-circle-outline" color="#E9446A" size={30} />
            ),
            tabBarButton: (props) => <AddOpcao {...props} />, // Usando AddOpcao diretamente
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
    </NavigationContainer>
  );
}
