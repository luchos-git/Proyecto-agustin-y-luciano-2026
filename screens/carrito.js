import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function CarritoScreen() {
  return (
    <View style={styles.container}>
      <Text>Aquí está tu carrito de compras.</Text>
      <Button title="Finalizar" onPress={() => Alert.alert("En proceso", "Estamos trabajando en esto")} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', justifyContent: 'center' }});