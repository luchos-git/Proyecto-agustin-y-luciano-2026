import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CarritoScreen from '../screens/Carrito';
import MenuScreen from '../screens/Menu'; // <-- Importamos tu archivo

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: 'right' }}>
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Carrito" component={CarritoScreen} />
      <Drawer.Screen name="Opciones del Menú" component={MenuScreen} /> 
    </Drawer.Navigator>
  );
}