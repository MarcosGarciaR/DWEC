//Elimina el ID 107 si existe en el Set. Usa un if junto con has() para asegurarte de que solo lo intentas borrar si está.

let numeros = [101, 105, 101, 103, 105]

let idsUnicos = new Set(numeros)

//Añado 107 para que haya las dos situaciones
idsUnicos.add(107)

//Me hago una funcion
function borrarSet(valor) {
    if (idsUnicos.has(107) == true) {
        idsUnicos.delete(107)
        return valor + " a sido borrado"
    } else {
        return "No existe " + valor
    }
}

console.log(borrarSet(107))

console.log(borrarSet(107))