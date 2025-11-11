//Dado un array de palabras frase = ['a', 'b', 'a', 'c', 'b', 'a']. Usa un Map para contar la frecuencia de cada palabra 
//y almacena el resultado como {'a': 3, 'b': 2, 'c': 1} (la clave es la palabra, el valor es la cuenta).

let frase = ['a', 'b', 'a', 'c', 'b', 'a']

// Crear un Map vacío
let contador = new Map();

// Recorrer cada palabra
for (let palabra of frase) {
    if (contador.has(palabra)) {
        // Si ya existe, sumamos 1
        contador.set(palabra, contador.get(palabra) + 1);
    } else {
        // Si no existe, iniciamos en 1
        contador.set(palabra, 1);
    }
}

console.log(contador);
