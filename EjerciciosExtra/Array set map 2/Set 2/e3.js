//Usa el método has() para comprobar si el ID 103 existe en el Set. Luego, comprueba si existe el ID 999.

let numeros = [101, 105, 101, 103, 105]

let idsUnicos = new Set(numeros)

console.log(idsUnicos.has(103)) 
console.log(idsUnicos.has(999))