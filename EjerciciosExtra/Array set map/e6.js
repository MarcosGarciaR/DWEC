// Crear un Set con libros
let libros = new Set([
  "El Señor de los Anillos",
  "Cien Años de Soledad",
  "1984",
  "Don Quijote de la Mancha",
  "Harry Potter y la Piedra Filosofal"
]);

// Añadir elementos
libros.add("Crónica de una Muerte Anunciada"); 
libros.add("1984"); // repetido, el Set lo ignora

// Eliminar un elemento concreto
libros.delete("1984"); 
// .delete(valor) → elimina el elemento indicado del Set
// Devuelve true si existía y se eliminó, false si no existía

// Recorrer el Set
for (let l of libros) {
  console.log(l);
  // Muestra todos los elementos restantes del Set
}
