//Escribe una función buscarTraduccion(clave) que busque la clave en traducciones. 
// Si la encuentra, devuelve el valor; si no, devuelve 'Traducción no disponible'.

let config = { version: 1.0 }

let traducciones = new Map([
    ["hello", "hola"],
    ["bye", "adiós"],
    [1, "Primer Nivel"],
    [config, "Configuración Global"]
])

function buscarTraduccion(clave) {
    if (traducciones.has(clave)) {
        return traducciones.get(clave)
    } else {
        return "Traducción no disponible"
    }
}

console.log(buscarTraduccion("hello"))
console.log(buscarTraduccion(2))