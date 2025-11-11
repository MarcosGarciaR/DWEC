//Crea una matriz (array de arrays) tablero = [['x', 'o', 'x'], ['o', 'x', 'o'], ['x', 'o', 'x']]. 
//Imprime el elemento central ('x'). Desestructura el primer array para obtener solo los dos primeros elementos en variables separadas.

let tablero = [['x', 'o', 'x'], ['o', 'x', 'o'], ['x', 'o', 'x']];

// Imprimir el elemento central (segunda fila, segunda columna)
console.log(tablero[1][1]); // 'x'

// Desestructurar el primer array para obtener solo los dos primeros elementos
const [primero, segundo] = tablero[0];
console.log(primero); // 'x'
console.log(segundo); // 'o'
