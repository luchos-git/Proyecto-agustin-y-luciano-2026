# El Hook `useState` en React Native 

El estado es uno de los conceptos más importantes en React. Es lo que permite que nuestras aplicaciones sean **interactivas**. Sin estado, una aplicación sería simplemente una serie de imágenes y textos estáticos.

---

## 1. ¿Qué es el "Estado"?

Imagina que el estado es la **memoria** de un componente. Es un lugar donde el componente guarda información que puede cambiar con el tiempo (como el resultado de una suma, el texto de un formulario o si un menú está abierto o cerrado).

Cuando el estado cambia, React detecta ese cambio y **vuelve a renderizar** (dibujar) el componente automáticamente para mostrar la información actualizada.

---

## 2. Sintaxis Básica

Para usar el estado, primero debemos importar el Hook desde React:

```javascript
import React, { useState } from 'react';
```

Luego, lo declaramos dentro de nuestra función:

```javascript
const [valor, setValor] = useState(valorInicial);
```

-   **`valor`**: Es la variable que contiene el dato actual.
-   **`setValor`**: Es la función que usamos para cambiar ese dato.
-   **`valorInicial`**: El valor que tendrá la variable al cargarse la app por primera vez.

---

## 3. Ejemplos con distintos tipos de datos

### A. Números (Contadores)
Ideal para sumar puntos, cantidades en un carrito, etc.

```javascript
const [puntos, setPuntos] = useState(0);

const ganarPunto = () => {
  setPuntos(puntos + 1); // Actualiza el número
};
```

### B. Strings (Textos)
Se usa mucho en formularios y buscadores.

```javascript
const [nombre, setNombre] = useState("");

const cambiarNombre = (nuevoNombre) => {
  setNombre(nuevoNombre); // Guarda lo que el usuario escribe
};
```

### C. Booleans (Interruptores)
Perfecto para mostrar u ocultar elementos (Modo oscuro, mostrar contraseña, etc).

```javascript
const [estaLogueado, setEstaLogueado] = useState(false);

const toggleLogin = () => {
  setEstaLogueado(!estaLogueado); // Invierte el valor (true <-> false)
};
```

### D. Objetos
Para manejar múltiples datos relacionados.

```javascript
const [usuario, setUsuario] = useState({ nombre: "Juan", edad: 20 });

const cumplirAnios = () => {
  // ¡CUIDADO! En objetos debemos mantener lo anterior usando el spread operator (...)
  setUsuario({
    ...usuario,
    edad: usuario.edad + 1
  });
};
```

---

## 4. Reglas de Oro del useState ⚠️

1.  **Nunca modifiques la variable directamente**:
    -   ❌ Mal: `puntos = puntos + 1;`
    -   ✅ Bien: `setPuntos(puntos + 1);`
2.  **Solo se usan en el nivel superior**: No puedes poner un `useState` dentro de un `if` o de un bucle `for`.
3.  **Los Hooks se importan de React**: Siempre verifica que tengas el `import { useState } from 'react';`.

---
