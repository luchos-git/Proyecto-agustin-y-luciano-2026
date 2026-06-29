import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Menu from './menu';

export default function App() {
  const [vistaActual, setVistaActual] = useState('Home');
  const [menuVisible, setMenuVisible] = useState(false);

  const renderContenido = () => {
    switch (vistaActual) {
      case 'Home': return <Text style={styles.texto}>Pantalla de Inicio</Text>;
      case 'Config': return <Text style={styles.texto}>Pantalla de Configuración</Text>;
      default: return <Text style={styles.texto}>Inicio</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Mi App Simple</Text>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Text style={styles.botonMenu}>MENU</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contenido}>
        {renderContenido()}
      </View>

      {menuVisible && (
        <Menu 
          cambiarVista={(vista) => {
            setVistaActual(vista);
            setMenuVisible(false);
          }} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { height: 80, backgroundColor: '#333', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 30 },
  titulo: { color: '#fff', fontSize: 20 },
  botonMenu: { color: '#fff', fontWeight: 'bold' },
  contenido: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 18 }
});