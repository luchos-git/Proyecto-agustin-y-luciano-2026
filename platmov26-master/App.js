import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Saludo from './components/Saludo';
import TextoPersonalizado from './components/TextoPersonalizado';
import ContadorInteractivo from './components/ContadorInteractivo';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextoPersonalizado texto="Clase de Hoy: Manejo de Estado" />
      
      {/* Componente que encapsula la lógica de useState */}
      <ContadorInteractivo />

      <TextoPersonalizado texto="Otros Componentes de Prueba:" />

      <TextoPersonalizado texto="Es otro componente?" texto2="otro texto"/>

      <TextoPersonalizado/>
      <TextoPersonalizado/>

      <TextoPersonalizado/>
      <TextoPersonalizado/>
      <TextoPersonalizado/>
      <TextoPersonalizado/>
      <TextoPersonalizado/>

      <Saludo />
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});
