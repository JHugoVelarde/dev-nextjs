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

---

## ⌨ Usando Visual Studio 

La mejor forma de aprender a programar es escribiendo, rompiendo y arreglando el código tú mismo. Me alegra mucho que quieras dar este paso práctico.

Para ver este código de JavaScript Moderno funcionando desde Visual Studio Code (VSC), la manera más sencilla para empezar es enlazarlo a un archivo HTML y ver los resultados en la consola de tu navegador web. 

---

## Resumen de la solución
Vamos a crear un pequeño proyecto con dos archivos: 
1.  Un archivo **HTML** (`index.html`) que servirá como base o "puente".
2.  Un archivo **JavaScript** (`app.js`) donde pondremos todo el código ES6+ que aprendimos.

Al abrir el archivo HTML en tu navegador, este leerá y ejecutará tu código JavaScript automáticamente.

---

## Instrucciones paso a paso

### 1. Preparar tu espacio de trabajo
1.  Crea una nueva carpeta en tu computadora (por ejemplo, `curso-javascript`).
2.  Abre Visual Studio Code.
3.  Ve al menú superior y selecciona **File > Open Folder...** (Archivo > Abrir carpeta...) y selecciona la carpeta que acabas de crear.

### 2. Crear los archivos
1.  En el panel izquierdo de VSC, haz clic en el ícono de "Nuevo archivo" (o presiona `Ctrl + N`).
2.  Crea un archivo llamado `index.html`.
3.  Crea otro archivo llamado `app.js`.

### 3. Agregar el código HTML
Abre el archivo `index.html`, copia y pega este código. Nota que en la línea 10 estamos conectando nuestro archivo de JavaScript:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Práctica de JavaScript Moderno</title>
</head>
<body>
    <h1>¡Mi código está funcionando!</h1>
    <p>Abre la consola del navegador para ver la magia.</p>
    
    <script src="app.js"></script> 
</body>
</html>
```

### 4. Agregar el código JavaScript
He agrupado todo lo que vimos (funciones de flecha, desestructuración, spread operator y promesas) en un solo script continuo. Abre `app.js`, copia y pega lo siguiente:

```javascript
// --- 1. Funciones de Flecha ---
const saludar = (nombre) => `Hola ${nombre}`;
console.log("--- Funciones de Flecha ---");
console.log(saludar("Estudiante"));

// --- 2. Desestructuración de Objetos ---
const usuario = { id: 1, username: "coder123", correo: "ana@ejemplo.com" };
const { username, correo } = usuario; // Extrayendo datos
console.log("\n--- Desestructuración ---");
console.log("Usuario:", username, "- Correo:", correo);

// --- 3. Spread Operator (...) ---
const base = { power: 100, life: 50 };
const mejora = { ...base, life: 80, shield: 20 }; // Combinando y actualizando
console.log("\n--- Spread Operator ---");
console.log("Nave mejorada:", mejora);

// --- 4. Promesas y Async/Await ---
const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        const exito = true;
        // Simulamos una demora de 2 segundos (2000 ms) como si fuera un servidor real
        setTimeout(() => {
            exito ? resolve("¡Datos del servidor recibidos con éxito!") : reject("Error de conexión");
        }, 2000);
    });
};

async function procesar() {
    console.log("\n--- Async / Await ---");
    try {
        console.log("Cargando datos (espera 2 segundos)...");
        const resultado = await obtenerDatos(); 
        console.log(resultado); // Se imprime cuando la promesa se resuelve
    } catch (error) {
        console.error(error);
    }
}

// Ejecutamos la función asíncrona
procesar();
```
*(Recuerda guardar ambos archivos usando `Ctrl + S` o `Cmd + S`).*

### 5. Ver el código en acción
1.  Ve a la carpeta `curso-javascript` en tu computadora (fuera de VSC).
2.  Haz doble clic en el archivo `index.html`. Esto lo abrirá en tu navegador web por defecto (Chrome, Firefox, Edge, etc.).
3.  Una vez en el navegador, haz **clic derecho** en cualquier parte de la página y selecciona **Inspeccionar** (o presiona `F12`).
4.  En el panel que se abre, busca la pestaña que dice **Consola** (o *Console*).

¡Ahí verás los resultados de tu código imprimiéndose paso a paso!

---

## 💻 Mostrar en la página web en lugar de la consola

Dar el salto de la consola a la página web real es uno de los momentos más emocionantes al aprender JavaScript. 

Para lograr esto, usaremos algo llamado el **DOM** (Document Object Model). El DOM es básicamente la estructura de tu página web, y JavaScript puede interactuar con ella para leer, añadir o cambiar elementos en tiempo real.

---

## Resumen de la solución

Vamos a hacer dos cosas muy sencillas:
1.  **En tu HTML:** Agregaremos un "contenedor" vacío (una etiqueta `<div>`) y le pondremos un identificador único (`id`). Este será el espacio donde imprimiremos nuestros datos.
2.  **En tu JavaScript:** En lugar de usar `console.log()`, usaremos una instrucción para buscar ese contenedor por su `id` y modificaremos su contenido interno agregando los textos directamente.

---

## Instrucciones paso a paso

### 1. Actualizar el archivo HTML
Abre tu archivo `index.html` y agrega el contenedor. Vamos a crear un `div` con el id `pantalla`.

Reemplaza tu código HTML con este:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Práctica de JavaScript Moderno</title>
    <link rel="shortcut icon" href="#">
</head>
<body>
    <h1>¡Mi código está en la pantalla!</h1>
    <p>Los resultados de JavaScript aparecerán justo debajo:</p>
    
    <div id="pantalla" style="background-color: #f0f0f0; padding: 15px; border-radius: 8px;">
        </div>
    
    <script src="app.js"></script> 
</body>
</html>
```

### 2. Actualizar el archivo JavaScript
Abre tu archivo `app.js`. Vamos a agregar una variable al principio que "atrape" ese contenedor de HTML usando `document.getElementById()`. Luego, usaremos `.innerHTML +=` para sumarle texto en formato HTML.

Reemplaza tu código en `app.js` con el siguiente:

```javascript
// 0. Capturamos el contenedor del HTML
const pantalla = document.getElementById("pantalla");

// --- 1. Funciones de Flecha ---
const saludar = (nombre) => `Hola ${nombre}`;
pantalla.innerHTML += `<h3>Funciones de Flecha</h3>`;
pantalla.innerHTML += `<p>${saludar("Estudiante")}</p>`;

// --- 2. Desestructuración de Objetos ---
const usuario = { id: 1, username: "coder123", correo: "ana@ejemplo.com" };
const { username, correo } = usuario; 
pantalla.innerHTML += `<h3>Desestructuración</h3>`;
pantalla.innerHTML += `<p>Usuario: <b>${username}</b> <br> Correo: <b>${correo}</b></p>`;

// --- 3. Spread Operator (...) ---
const base = { power: 100, life: 50 };
const mejora = { ...base, life: 80, shield: 20 }; 
pantalla.innerHTML += `<h3>Spread Operator</h3>`;
// Usamos JSON.stringify para convertir el objeto en un texto legible en la pantalla
pantalla.innerHTML += `<p>Nave mejorada: ${JSON.stringify(mejora)}</p>`;

// --- 4. Promesas y Async/Await ---
const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        const exito = true;
        setTimeout(() => {
            exito ? resolve("¡Datos del servidor recibidos con éxito!") : reject("Error de conexión");
        }, 2000);
    });
};

async function procesar() {
    pantalla.innerHTML += `<h3>Async / Await</h3>`;
    try {
        pantalla.innerHTML += `<p id="cargando">Cargando datos (espera 2 segundos)...</p>`;
        
        const resultado = await obtenerDatos(); 
        
        // Cuando lleguen los datos, borramos el mensaje de "Cargando..."
        document.getElementById("cargando").style.display = 'none';
        
        // Mostramos el resultado final
        pantalla.innerHTML += `<p style="color: green; font-weight: bold;">${resultado}</p>`;
    } catch (error) {
        pantalla.innerHTML += `<p style="color: red;">${error}</p>`;
    }
}

procesar();
```

### 3. ¡Mira la magia!
Guarda ambos archivos (`Ctrl + S`). Si tu *Live Server* sigue activo, ve a tu navegador. Verás que los datos de las tres primeras secciones aparecen al instante, y luego de 2 segundos, el texto de "Cargando datos..." desaparecerá para mostrar tu mensaje de éxito en color verde.

---

## 🌐 Consumiendo datos de una API real

Demos el salto a una API real, es un hito súper importante en el aprendizaje. Es aquí donde las páginas web cobran vida conectándose con el mundo exterior. 

Para este ejercicio, vamos a usar la **API pública de Rick y Morty** (no requiere registro ni contraseñas) para traer los datos de un personaje y mostrarlos en tu pantalla.

---

## Resumen de la solución

Vamos a actualizar nuestro código para usar una herramienta nativa de JavaScript llamada `fetch`.
* **`fetch`**: Es una función que le dice al navegador "ve a esta dirección web (URL) y tráeme lo que encuentres".
* **El proceso**: Como internet toma tiempo, combinaremos `fetch` con nuestro conocimiento de `async/await` (para esperar la respuesta). Luego, usaremos la **desestructuración** para sacar solo el nombre, la especie y la foto del personaje, y finalmente lo inyectaremos en el DOM como hicimos antes.

---

## Instrucciones de implementación

Vamos a limpiar nuestros archivos para centrarnos solo en esta nueva funcionalidad.

### 1. Prepara tu archivo HTML
Abre tu archivo `index.html` y asegúrate de tener este código. He simplificado un poco los textos para enfocarnos en la API:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Consumiendo una API Real</title>
    <link rel="shortcut icon" href="#">
</head>
<body>
    <h1>Mi primera petición a una API</h1>
    
    <div id="pantalla" style="background-color: #e0f7fa; padding: 20px; border-radius: 10px; max-width: 300px;">
        </div>
    
    <script src="app.js"></script> 
</body>
</html>
```

### 2. Escribe la lógica de la API en JavaScript
Abre tu archivo `app.js`, borra lo que tenías y pega este nuevo código. Lee atentamente los comentarios, ¡ahí está la magia de ES6+ aplicada a un caso real!

```javascript
// 1. Capturamos el contenedor del HTML
const pantalla = document.getElementById("pantalla");

// 2. Creamos una función asíncrona de flecha
const obtenerPersonaje = async () => {
    // Mostramos un mensaje temporal mientras esperamos a internet
    pantalla.innerHTML = `<p id="cargando">Viajando por el multiverso (cargando datos)...</p>`;

    try {
        // Hacemos la petición a la API con fetch y esperamos (await)
        // El número '1' al final de la URL es el ID del personaje
        const respuesta = await fetch("https://rickandmortyapi.com/api/character/1");
        
        // Convertimos esa respuesta de texto plano a un objeto JavaScript (JSON)
        const datos = await respuesta.json();

        // Aplicamos Desestructuración: Extraemos solo lo que nos importa del objeto
        const { name, species, image, status } = datos;

        // Inyectamos el resultado en la pantalla, usando literales de plantilla (Template literals)
        pantalla.innerHTML = `
            <h3 style="margin-top: 0;">Personaje Encontrado:</h3>
            <img src="${image}" alt="${name}" style="border-radius: 50%; width: 150px; border: 3px solid #000;">
            <p><b>Nombre:</b> ${name}</p>
            <p><b>Especie:</b> ${species}</p>
            <p><b>Estado:</b> ${status}</p>
        `;
    } catch (error) {
        // Si no hay internet o la URL está mal, atrapamos el error aquí
        pantalla.innerHTML = `<p style="color: red;">¡Ups! Hubo un problema de conexión: ${error.message}</p>`;
    }
};

// 3. Ejecutamos nuestra función
obtenerPersonaje();
```

### 3. Prueba tu código
Guarda ambos archivos (`Ctrl + S`). Si miras tu navegador ahora, deberías ver una pequeña tarjeta azul claro que dice "Viajando por el multiverso..." por una fracción de segundo, y luego ¡aparecerá la imagen y los datos de Rick Sanchez!

> **Reto rápido:** Si cambias el número `1` al final de la URL en la línea `fetch(...)` por un `2` o un `3`, y guardas el archivo, ¡verás que tu código trae a otros personajes automáticamente!

