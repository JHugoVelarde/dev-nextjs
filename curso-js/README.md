# Curso de JavaScript Moderno (ES6+)

Para este curso de **JavaScript Moderno (ES6+)**, he preparado un repaso de temas que van desde la sintaxis básica hasta la asincronía avanzada.

---

## 1. Fundamentos: Declaración de variables

En JavaScript moderno, olvidamos `var` y usamos `let` y `const`.

* **`let`**: Para variables que cambiarán su valor.
* **`const`**: Para valores constantes (no pueden reasignarse).

```javascript
let puntaje = 10;
puntaje = 12; // Permitido

const nombre = "Alex";
// nombre = "Juan"; // Error: No se puede reasignar una constante
```

---

## 2. Funciones de Flecha (Arrow Functions)

Son una forma más corta de escribir funciones. Si la función solo tiene una línea, el `return` es implícito.

**Sintaxis tradicional:**
```javascript
function saludar(nombre) {
    return "Hola " + nombre;
}
```

**Sintaxis ES6 (Flecha):**
```javascript
const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar("Mundo")); 
```
* **Dato clave:** No tienen su propio contexto de `this`, lo que las hace ideales para ciertos métodos de arreglos.

---

## 3. Desestructuración de Objetos

Permite extraer propiedades de un objeto y convertirlas en variables individuales de forma rápida.

```javascript
const usuario = {
    id: 1,
    username: "coder123",
    correo: "ana@ejemplo.com"
};

// Extraemos 'username' y 'correo' directamente
const { username, correo } = usuario;

console.log(username); // "coder123"
```

---

## 4. Operador de Propagación (Spread Operator `...`)

Se usa para copiar o combinar arreglos y objetos sin modificar el original.

```javascript
const base = { power: 100, life: 50 };
const mejora = { ...base, life: 80, shield: 20 };

console.log(mejora); 
// Resultado: { power: 100, life: 80, shield: 20 }
```

---

## 5. Asincronía: Promesas y Async/Await

Las promesas gestionan tareas que toman tiempo (como pedir datos a un servidor).

### Promesas
Representan un valor que estará disponible "ahora, en el futuro o nunca".

```javascript
const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        const exito = true;
        setTimeout(() => {
            exito ? resolve("Datos recibidos") : reject("Error de conexión");
        }, 2000);
    });
};
```

### Async / Await
Es la forma moderna y legible de consumir promesas. Hace que el código asíncrono parezca síncrono.

```javascript
async function procesar() {
    try {
        console.log("Cargando...");
        const resultado = await obtenerDatos(); // Espera a que la promesa se resuelva
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

procesar();
```

---

## Resumen de la solución
* **Variables:** Usamos `let` y `const` para un mejor control del alcance.
* **Funciones:** Las flechas `=>` reducen el código visualmente.
* **Estructura:** La desestructuración y el spread operator facilitan la manipulación de datos complejos.
* **Asincronía:** `async/await` evita el "callback hell", permitiendo un flujo de lectura lineal.

### Instrucciones de implementación
1.  Copia cualquier bloque de código en la consola de tu navegador (F12 -> Console) para probarlo.
2.  Asegúrate de usar `const` por defecto y solo cambiar a `let` si sabes que el valor mutará.
3.  Cuando trabajes con APIs, usa siempre bloques `try/catch` dentro de funciones `async` para evitar que tu aplicación se detenga por errores no controlados.

¿Te gustaría que profundicemos en cómo usar estas herramientas para hacer peticiones reales a una API externa?
