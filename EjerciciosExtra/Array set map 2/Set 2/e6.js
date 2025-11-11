//Utiliza un bucle for...of para recorrer el Set idsUnicos e imprimir cada ID con un mensaje: "El ID encontrado es: [ID]".
let numeros = [101, 105, 101, 103, 105];

let idsUnicos = new Set(numeros);

for (let id of idsUnicos) {
    console.log("El ID encontrado es: " + id);
}
