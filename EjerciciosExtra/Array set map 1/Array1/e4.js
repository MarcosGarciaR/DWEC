//Dado un array de números notas = [7, 8.5, 5, 9, 6.5], usa map() para crear un nuevo array con las notas redondeadas al entero superior (Math.ceil). 
// Usa filter() para obtener solo las notas aprobadas (>= 5).

// Array inicial de notas
let notas = [7, 8.5, 5, 9, 6.5];

// Crear un nuevo array con las notas redondeadas hacia arriba
let notasRedondeadas = notas.map(nota => Math.ceil(nota));
// .map() → recorre el array y devuelve un nuevo array aplicando la función a cada elemento
// Math.ceil(n) → redondea un número al entero superior

// Obtener solo las notas aprobadas (>= 5)
let notasAprobadas = notas.filter(nota => nota >= 5);
// .filter() → devuelve un nuevo array con los elementos que cumplen la condición

console.log("Redondeadas:", notasRedondeadas); // [7, 9, 5, 9, 7]
console.log("Aprobadas:", notasAprobadas);     // [7, 8.5, 5, 9, 6.5]

