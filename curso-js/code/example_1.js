// Copia todo este código al archivo app.js

// 0. Capturamos el contenedor del HTML
const pantalla = document.getElementById("pantalla");

// --- 1. Funciones de flecha ---
const saludar = (nombre) => `Hola ${nombre}`;
// console.log("--- Funciones de Flecha ---");
pantalla.innerHTML += `<h3>Funciones de Flechas</h3>`;
// console.log(saludar("Estudiante"));
pantalla.innerHTML += `<p>${saludar("Estudiante")}</p>`;

// --- 2. Desestructuración de Objetos ---
const usuario = { id: 1, username: "coder123", correo: "ana@ejemplo.com" };
const { username, correo } = usuario; // Extrayendo datos
// console.log("\n--- Desestructuración ---");
// console.log("Usuario:", username, "- Correo:", correo);
pantalla.innerHTML += `<h3>Desestructuración</h3>`;
pantalla.innerHTML += `<p>Usuario: <b>${username}</b> <br> Correo: <b>${correo}</b></p>`;

// --- 3. Spread Operator (...) ---
const base = { power: 100, life: 50 };
const mejora = { ...base, life: 80, shield: 20 }; // Combinando y actualizando
// console.log("\n--- Spread Operator ---");
// console.log("Nave mejorada:", mejora);
pantalla.innerHTML += `<h3>Spread Operator</h3>`;
// Usamos JSON.stringify para convertir el objeto en un texto legible en la pantalla
pantalla.innerHTML += `<p>Nave mejorada: ${JSON.stringify(mejora)}</p>`;

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
    // console.log("\n--- Async / Await ---");
    pantalla.innerHTML += `<h3>Async / Await</h3>`;
    try {
        // console.log("Cargando datos (espera 2 segundos)...");
        pantalla.innerHTML += `<p id="cargando">Cargando datos (espera 2 segundos)...</p>`;
        
        const resultado = await obtenerDatos(); 
        
        // console.log(resultado); // Se imprime cuando la promesa se resuelve
        // Cuando lleguen los datos, borramos el mensaje de "Cargando..."
        document.getElementById("cargando").style.display = 'none';

        // Mostramos el resultado final
        pantalla.innerHTML += `<p style="color: green; font-weight: bold;">${resultado}</p>`;
    } catch (error) {
        // console.error(error);
        pantalla.innerHTML += `<p style="color: red;">${error}</p>`;
    }
}

// Ejecutamos la función asíncrona
procesar();
