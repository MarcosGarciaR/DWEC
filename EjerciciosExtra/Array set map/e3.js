// Función para eliminar un elemento en una posición específica
function eliminarTercero(arr, posicion) {
  arr.splice(posicion, 1); 
  // .splice(indice, cantidad) → elimina 'cantidad' elementos desde 'indice'
  // En este caso, elimina 1 elemento en la posición indicada (tercera posición = índice 2)
  return arr; 
  // Devuelve el array modificado
}

// Array inicial
let animales = ["Zorro", "Perro", "Gato", "Tortuga", "Hamster"];

// Llamada a la función y mostrar resultado
console.log(eliminarTercero(animales, 2)); 
// Resultado: ["Zorro", "Perro", "Tortuga", "Hamster"]
