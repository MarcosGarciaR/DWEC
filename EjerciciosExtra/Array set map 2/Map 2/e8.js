//Convierte el Map traducciones a un Array de Pares usando el operador spread (...). Luego, crea un nuevo Map a partir de ese Array.

let config = { version: 1.0 };

let traducciones = new Map([
    ["hello", "hola"],
    ["bye", "adiós"],
    [1, "Primer Nivel"],
    [config, "Configuración Global"]
]);

// Convertir el Map a un array de pares [clave, valor]
let arrayDePares = [...traducciones];

console.log(arrayDePares);

// Crear un nuevo Map a partir de ese array
let nuevoMap = new Map(arrayDePares);

console.log(nuevoMap);
