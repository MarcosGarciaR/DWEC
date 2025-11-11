// Dado un array de objetos alumnos = [{nombre: 'Ana', edad: 20}, {nombre: 'Luis', edad: 22}], usa map() para obtener un array solo con los nombres. Usa filter() para obtener solo los alumnos mayores de 21 años.
//Usa filter() para obtener solo los alumnos mayores de 21 años.

// Array de objetos alumnos
let alumnos = [
  {nombre: 'Ana', edad: 20},
  {nombre: 'Luis', edad: 22}
];

// Obtener un array solo con los nombres
let mapa = alumnos.map(alumno => alumno.nombre);
// .map() → recorre el array y devuelve un nuevo array con los valores que retorna la función
// Aquí extraemos solo la propiedad 'nombre' de cada objeto
console.log(mapa); 
// Resultado: ["Ana", "Luis"]

// Obtener solo los alumnos mayores de 21 años
let mayores21 = alumnos.filter(alumno => alumno.edad > 21);
// .filter() → devuelve un nuevo array con los elementos que cumplen la condición
console.log(mayores21); 
// Resultado: [{nombre: 'Luis', edad: 22}]
