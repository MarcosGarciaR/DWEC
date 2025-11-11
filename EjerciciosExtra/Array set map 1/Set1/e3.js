// Dado un array con valores repetidos: colores = ['rojo', 'azul', 'verde', 'rojo', 'amarillo', 'azul']. 
// Crea un nuevo array sin duplicados a partir de este array usando el constructor new Set() y el operador spread (...).

let colores = ['rojo', 'azul', 'verde', 'rojo', 'amarillo', 'azul']

let sinDuplicados = [...new Set(colores)] //... es spread

console.log(sinDuplicados);