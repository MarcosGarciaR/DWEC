// Crear un Set que almacene cinco libros
let libros = new Set([
  "El Señor de los Anillos",
  "Cien Años de Soledad",
  "1984",
  "Don Quijote de la Mancha",
  "Harry Potter y la Piedra Filosofal"
]);
// new Set(array) → crea un conjunto único de elementos, sin duplicados
// Un Set no tiene índices, el orden no está garantizado

// Recorrer el Set
for (let l of libros) {
  console.log(l);
  // 'for...of' se puede usar para recorrer Sets
}
