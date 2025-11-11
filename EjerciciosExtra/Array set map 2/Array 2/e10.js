//Escribe una función procesarNotas(listaNotas) que reciba un array de notas (números) 
//y devuelva un objeto con tres propiedades: media (usando reduce), aprobados (usando filter) 
//y notas10 (usando includes para verificar si alguien tiene un 10).

let notas = [1, 8, 7, 5, 4, 10];

function procesarNotas(listaNotas) {
    // Media usando reduce
    let media = listaNotas.reduce((acum, nota) => acum + nota, 0) / listaNotas.length;

    // Aprobados (>=5) usando filter
    let aprobados = listaNotas.filter(nota => nota >= 5)

    // Verificar si hay un 10 usando includes
    let tieneNota10 = listaNotas.includes(10)

    return {
        media: media,
        aprobados: aprobados,
        notas10: tieneNota10
    };
}

console.log(procesarNotas(notas))
