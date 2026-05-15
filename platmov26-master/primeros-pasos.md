# Primeros Pasos: Construyendo la Interfaz

Una vez que tienes el proyecto corriendo y el código QR escaneado, el siguiente paso es entender cómo construir tu aplicación.

---

## 1. Los Componentes: El concepto de "Lego"

En React Native, tu aplicación es una composición de piezas pequeñas. Vamos a crear un ejemplo con componentes muy simples en tu `App.js`.

### Ejemplo: Mi Primera Estructura
```javascript
import { View, Text, StyleSheet } from 'react-native';

// Este es un componente
const Saludo = () => {
  return (
    <View style={styles.cajaSaludo}>
      <Text style={styles.textoSaludo}>¡Hola 7mo!</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi App de Práctica</Text>
      {/* Usamos nuestro componente como si fuera una etiqueta HTML */}
      <Saludo />
      <Saludo />
    </View>
  );
}
```

---

## 3. Estilos en React Native (StyleSheet)

A diferencia de la web, aquí no hay archivos `.css`. Usamos objetos de JavaScript.

### Reglas de Oro de los Estilos:
1.  **CamelCase**: En vez de `background-color`, usamos `backgroundColor`.
2.  **Flexbox**: Es el sistema de diseño por defecto. Todo es un "Flex Container" automáticamente.
3.  **Unidades**: No se usa `px`, `em` ni `%` (en la mayoría de los casos). Se usan números que representan "puntos de densidad de pantalla".

### Ejemplo de Estilos:
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio de la pantalla
    backgroundColor: '#f5f5f5',
    alignItems: 'center', // Centra horizontalmente
    justifyContent: 'center', // Centra verticalmente
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cajaSaludo: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '80%',
  },
  textoSaludo: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
});
```

---
