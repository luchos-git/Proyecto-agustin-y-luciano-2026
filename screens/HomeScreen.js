import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen() {
  const alertaProceso = () => Alert.alert("En proceso", "Esta sección estará lista pronto.");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}><Text>Banner de Promo/Evento</Text></View>
      
      <Text style={styles.tituloSeccion}>Ofertas del día</Text>
      <View style={styles.fila}>
        <View style={styles.card}>
          <Text>Foto</Text>
          <Text>[Nombre Prod]</Text>
          <TouchableOpacity style={styles.boton} onPress={alertaProceso}><Text>Agregar</Text></TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text>Foto</Text>
          <Text>[Nombre Prod]</Text>
          <TouchableOpacity style={styles.boton} onPress={alertaProceso}><Text>Agregar</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8E1' },
  banner: { height: 150, backgroundColor: '#ddd', margin: 10 },
  tituloSeccion: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  fila: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  card: { width: 150, backgroundColor: '#fff', padding: 10, alignItems: 'center', borderRadius: 10 },
  boton: { backgroundColor: '#ffcc80', padding: 5, marginTop: 5, borderRadius: 5 }
});