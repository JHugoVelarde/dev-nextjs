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