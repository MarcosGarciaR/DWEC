//Crea un Set llamado idsUnicos a partir del array [101, 105, 101, 103, 105]. Imprime el Set resultante y verifica su propiedad size.

let numeros = [101, 105, 101, 103, 105]

let idsUnicos = new Set(numeros)

console.log(idsUnicos)
console.log(idsUnicos.size)