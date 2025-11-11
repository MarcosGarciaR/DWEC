//Usando los Sets anteriores, escribe código para obtener un nuevo Set con los nombres que son solo desarrolladores 
//(la diferencia: desarrolladores - diseñadores).

let desarrolladores = new Set(['Juan', 'Ana', 'Carlos']);
let diseñadores = new Set(['Ana', 'Pedro', 'Laura']);

// Diferencia: nombres que están en desarrolladores pero no en diseñadores
let soloDesarrolladores = new Set(
  [...desarrolladores].filter(nombre => !diseñadores.has(nombre))
);

console.log(soloDesarrolladores);
