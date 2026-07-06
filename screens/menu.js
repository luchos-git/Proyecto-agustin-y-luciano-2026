import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function MenuLateral(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.textoHeader}>Menú Nuevo</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, backgroundColor: '#007bff', marginBottom: 10 },
  textoHeader: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' }
});