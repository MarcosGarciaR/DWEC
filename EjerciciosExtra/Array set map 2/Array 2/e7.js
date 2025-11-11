//Crea dos arrays, frontend = ['HTML', 'CSS'] y backend = ['Node', 'SQL']. 
//Concaténalos usando el operador spread (...) en un array stackCompleto. Añade 'JavaScript' y luego ordena alfabéticamente el array final.

// Arrays iniciales
const frontend = ['HTML', 'CSS'];
const backend = ['Node', 'SQL'];

// Concatenamos usando spread
let stackCompleto = [...frontend, ...backend];

// Añadimos JavaScript
stackCompleto.push('JavaScript');

// Ordenamos alfabéticamente
stackCompleto.sort();

console.log(stackCompleto);
