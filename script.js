// script.js

// 1. LA BASE DE DATOS
// Pega aquí tu lista de 1000 canciones convertida a formato JSON.
// Por ahora, usamos un ejemplo corto.
const canciones = [
  { "numero": 1, "titulo": "La Chica de Ayer", "artista": "Nacha Pop", "año": 1980, "enlace": "https://www.youtube.com/watch?v=2pRmTJjBr6c&ab_channel=joseluis8008" },
  { "numero": 2, "titulo": "Devuélveme a mi chica", "artista": "Hombres G", "año": 1985, "enlace": "https://www.youtube.com/watch?v=L5V9vI_z_ok" },
  { "numero": 3, "titulo": "A quién le importa", "artista": "Alaska y Dinarama", "año": 1986, "enlace": "https://www.youtube.com/watch?v=g2p6N-roH48" },
  { "numero": 4, "titulo": "Corazón partío", "artista": "Alejandro Sanz", "año": 1997, "enlace": "https://www.youtube.com/watch?v=sS1z2-gS2VA" },
  // ... ¡AQUÍ IRÍAN TUS OTRAS 996 CANCIONES!
];

// 2. LA LÓGICA DE BÚSQUEDA
// Esta función se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    const inputNumero = document.getElementById('input-numero');
    const botonBuscar = document.getElementById('boton-buscar');
    const divResultado = document.getElementById('resultado');

    // Función que busca y muestra la canción
    const buscarCancion = () => {
        const numeroBuscado = parseInt(inputNumero.value);

        // Validamos que el número sea válido
        if (isNaN(numeroBuscado) || numeroBuscado < 1 || numeroBuscado > 1000) {
            divResultado.innerHTML = `<p class="error">Por favor, introduce un número entre 1 y 1000.</p>`;
            return;
        }

        // Buscamos la canción en nuestro array.
        // Como el array empieza en 0, restamos 1 al número.
        const cancionEncontrada = canciones.find(c => c.numero === numeroBuscado);

        // Mostramos el resultado
        if (cancionEncontrada) {
            divResultado.innerHTML = `
                <h2>#${cancionEncontrada.numero}: ${cancionEncontrada.titulo}</h2>
                <p><strong>Artista:</strong> ${cancionEncontrada.artista}</p>
                <p><strong>Año:</strong> ${cancionEncontrada.año}</p>
                <a href="${cancionEncontrada.enlace}" target="_blank" class="boton-reproducir">
                    ▶️ Escuchar en YouTube
                </a>
            `;
        } else {
            // Esto solo pasaría si faltan números en tu lista
            divResultado.innerHTML = `<p class="error">Canción no encontrada. ¡Qué raro!</p>`;
        }
    };

    // Asignamos la función al botón
    botonBuscar.addEventListener('click', buscarCancion);
    
    // Opcional: permitir buscar al presionar "Enter" en el campo de número
    inputNumero.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            buscarCancion();
        }
    });
});
 