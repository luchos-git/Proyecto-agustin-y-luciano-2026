# Guía de Inicio: React Native con Expo 🚀

¡Bienvenidos! Esta guía está diseñada para dar los primeros pasos en el desarrollo de aplicaciones móviles multiplataforma utilizando **React Native** y el ecosistema **Expo**.

---

## 1. ¿Qué es React Native y Expo?

### React Native
Es un framework de código abierto creado por Meta (Facebook) que permite construir aplicaciones móviles nativas utilizando JavaScript y React. A diferencia de las "WebViews", React Native utiliza componentes nativos reales, lo que garantiza un rendimiento y apariencia de alta calidad.

### Expo
Expo es una plataforma y un conjunto de herramientas construidas alrededor de React Native que simplifican enormemente el proceso de desarrollo. 
- **Ventaja principal:** No necesitas configurar Android Studio o Xcode inicialmente para empezar a ver tu código en un teléfono real.
- **Expo Go:** Es una aplicación que instalas en tu celular (iOS/Android) para previsualizar tu proyecto instantáneamente escaneando un código QR.

---

## 2. Comandos para Crear el Proyecto

Para comenzar desde cero, abre una terminal en tu carpeta de proyectos y sigue estos pasos:

### Paso 1: Crear el proyecto
Para una estructura **completamente limpia y en JavaScript** (ideal para aprender las bases), ejecuta:
```bash
npx create-expo-app@latest mi-app --template blank
```
*(Si usas solo el comando sin `--template blank`, Expo suele crear un proyecto con TypeScript y navegación preconfigurada que puede ser complejo para empezar).*

### Paso 2: Entrar a la carpeta
```bash
cd mi-app
```

### Paso 3: Iniciar el servidor de desarrollo
```bash
npx expo start
```

Esto abrirá un **código QR** en la terminal. 

---

## 3. ¿Cómo ver mi App?

1. **En un celular real:**
   - Instala la app **Expo Go** desde la Play Store o App Store.
   - Escanea el código QR que apareció en la terminal.
   - Asegúrate de que tu celular y tu computadora estén conectados a la **misma red Wi-Fi**.

2. **En la Web:**
   - Presiona la tecla `w` en la terminal (puede requerir instalar dependencias adicionales que Expo te sugerirá).

---

## 4. Conceptos Generales de React Native

Para entender cómo funciona el código, debemos tener claros estos puntos:

### Componentes
Todo en React Native es un componente. Un componente es una pieza de código (usualmente una función) que devuelve lo que debe verse en pantalla.

### JSX (JavaScript XML)
Es una sintaxis que parece HTML pero vive dentro de JavaScript. Se usa para definir la estructura de la interfaz.

### Componentes Básicos (Los "Ladrillos")
A diferencia de la web donde usamos `<div>` o `<span>`, en React Native usamos:
- `<View>`: Es el contenedor básico (como un `div`).
- `<Text>`: Obligatorio para mostrar cualquier cadena de texto.
- `<Image>`: Para mostrar imágenes.
- `<ScrollView>`: Un contenedor que permite hacer scroll.
- `<StyleSheet>`: Se usa para definir los estilos (muy similar a CSS, pero usando objetos JavaScript).

---
