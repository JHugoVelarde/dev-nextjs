// 1. Capturamos los elementos del HTML
const pantalla = document.getElementById("pantalla");
const boton = document.getElementById("botonGenerar"); // Capturamos el botón

// 2. Creamos la función asíncrona que trae el personaje
const obtenerPersonajeAleatorio = async () => {
    pantalla.innerHTML = `<p id="cargando">Abriendo portal... 🌀</p>`;

    try {
        // Generamos un número entero al azar entre 1 y 826
        const idAleatorio = Math.floor(Math.random() * 826) + 1;
        
        // Usamos comillas invertidas (backticks) para meter la variable en la URL
        const url = `https://rickandmortyapi.com/api/character/${idAleatorio}`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        // Desestructuramos los datos
        const { name, species, image, status, origin } = datos;

        // Inyectamos el HTML (agregué el origen del personaje para dar más detalles)
        pantalla.innerHTML = `
            <h3 style="margin-top: 0;">${name}</h3>
            <img src="${image}" alt="${name}" style="border-radius: 10px; width: 100%; border: 3px solid #333;">
            <p><b>Especie:</b> ${species}</p>
            <p><b>Estado:</b> ${status === 'Alive' ? 'Vivo 🟢' : status === 'Dead' ? 'Muerto 🔴' : 'Desconocido ⚪'}</p>
            <p><b>Origen:</b> ${origin.name}</p>
        `;
    } catch (error) {
        pantalla.innerHTML = `<p style="color: red;">El portal falló: ${error.message}</p>`;
    }
};

// 3. Escuchamos el evento de "clic" en el botón
// Cuando el usuario haga clic, se ejecutará la función 'obtenerPersonajeAleatorio'
boton.addEventListener("click", obtenerPersonajeAleatorio);