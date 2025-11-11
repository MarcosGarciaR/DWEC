// Función para mostrar un elemento de un array según su posición
function mostrarPeli(array, p){
  return array[p]; 
  // Accede al elemento en la posición 'p' del array
  // Los arrays en JS usan índices que empiezan en 0
}

// Array de películas
let peliculas = ["Batman", "La lego pelicula", "El señor de los anillos"];

// Mostrar la segunda película
console.log(mostrarPeli(peliculas, 1)); 
// Resultado: "La lego pelicula"
// Índice 1 → segunda posición
