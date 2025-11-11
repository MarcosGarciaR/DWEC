//Crea una función normalizarTags(lista) que reciba un array de tags (['js', 'JS', 'javascript', 'Js']) 
//y devuelva un Set de tags únicos convertidos a minúsculas ({'js', 'javascript'}).

let array = ['js', 'JS', 'javascript', 'Js'];

function normalizarTags(lista) {
    // Convertimos todos los tags a minúsculas
    let minusculas = lista.map(lista => lista.toLowerCase());

    // Creamos un Set para eliminar duplicados
    let setUnico = new Set(minusculas);

    return setUnico;
}

console.log(normalizarTags(array));
