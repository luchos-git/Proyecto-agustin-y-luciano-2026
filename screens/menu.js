import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menú de Opciones</Text>
      <Text>• Info de tu perfil</Text>
      <Text>• Configuración</Text>
      <Text>• Tarjetas y medios de pago</Text>
      <Text>• Direcciones</Text>
      <Text>• Centro de ayuda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF8E1' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 }
});