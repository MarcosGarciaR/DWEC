// Crear un Set con cinco libros
let libros = new Set([
  "El Señor de los Anillos",
  "Cien Años de Soledad",
  "1984",
  "Don Quijote de la Mancha",
  "Harry Potter y la Piedra Filosofal"
]);

// Añadir nuevos elementos al Set
libros.add("Crónica de una Muerte Anunciada"); 
// .add(valor) → añade un elemento al Set

libros.add("1984"); 
// Intentar añadir un elemento repetido no tiene efecto
// Los Sets solo permiten valores únicos

// Recorrer el Set
for (let l of libros) {
  console.log(l);
  // Muestra todos los elementos únicos del Set
}
