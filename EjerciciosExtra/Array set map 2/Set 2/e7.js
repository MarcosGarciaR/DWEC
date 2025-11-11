//Dados dos Sets: desarrolladores = new Set(['Juan', 'Ana', 'Carlos']) y diseñadores = new Set(['Ana', 'Pedro', 'Laura']). 
//Escribe código para obtener un nuevo Set con los nombres que son comunes (la intersección).

let desarrolladores = new Set(['Juan', 'Ana', 'Carlos']);
let diseñadores = new Set(['Ana', 'Pedro', 'Laura']);

// Intersección: filtramos los nombres del primer Set que también están en el segundo
let interseccion = new Set([...desarrolladores].filter(nombre => diseñadores.has(nombre)));

console.log(interseccion);
