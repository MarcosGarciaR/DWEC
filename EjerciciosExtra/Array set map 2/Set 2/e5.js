//Convierte el idsUnicos a un array arrayIds usando el operador spread (...). Muestra el array.

let numeros = [101, 105, 101, 103, 105]

let idsUnicos = new Set(numeros)

let arrayIds = [...new Set(idsUnicos)]

console.log(arrayIds);
