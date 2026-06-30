import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Menu({ cambiarVista }) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => cambiarVista('Home')}>
        <Text style={styles.item}>Ir a Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => cambiarVista('Config')}>
        <Text style={styles.item}>Ir a Configuración</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: { position: 'absolute', top: 80, right: 0, width: 200, backgroundColor: '#eee', padding: 20, elevation: 5 },
  item: { fontSize: 18, marginVertical: 10, color: '#000' }
});