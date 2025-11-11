//Añade un titulo y luego elimina el primer titulo

// Función para mostrar un elemento del array (no se usa aquí)
function mostrarPeli(array, p){
  return array[p];
}

// Array de películas inicial
let peliculas = ["Batman", "La lego pelicula", "El señor de los anillos"];

// Añadir un título al final
peliculas.push("SAW 3"); 
// .push(valor) → añade un elemento al final del array

// Eliminar el primer título
peliculas.shift(); 
// .shift() → elimina el primer elemento del array
// No necesita pasar un índice, siempre elimina el primero

// Mostrar el array final
console.log(peliculas); 
// Resultado: ["La lego pelicula", "El señor de los anillos", "SAW 3"]