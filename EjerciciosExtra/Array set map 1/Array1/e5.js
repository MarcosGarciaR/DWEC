// Usa reduce() para calcular la nota media de las notas.

// Array de notas
let notas = [7, 8.5, 5, 9, 6.5];

// Calcular la nota media usando reduce
let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
// .reduce((acumulador, elemento) => ..., valorInicial)
// → recorre el array y acumula un valor (aquí la suma de las notas)
// valorInicial = 0 (el acumulador empieza en 0)
// Luego se divide entre notas.length para obtener la media

console.log(media); 
// Resultado: 7.2
