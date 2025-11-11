//Crea un Set llamado puntos. Añade dos objetos de coordenadas iguales, por ejemplo, {x: 10, y: 20} dos veces. 
//¿Cuántos elementos tiene el Set? (Nota: Explica a tus alumnos el porqué del resultado: los objetos son referencias únicas).

let puntos = new Set([
    {x: 10, y: 20},
    {x: 10, y: 20}
]);

console.log(puntos.size);

//Aunque los dos objetos tengan las mismas propiedades y valores, son dos objetos distintos en memoria por eso set almacena a ambos