//Añade el número 107 a idsUnicos. Intenta añadir de nuevo el número 105. ¿Cambió el tamaño? Demuéstralo imprimiendo idsUnicos.size.

let numeros = [101, 105, 101, 103, 105]

let idsUnicos = new Set(numeros)

idsUnicos.add(107)

idsUnicos.add(105)

console.log(idsUnicos.size) //4 pq solo hay 4 sin contar repetidos