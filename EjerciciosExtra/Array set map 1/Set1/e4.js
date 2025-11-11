// Define dos Sets: frontend = new Set(['HTML', 'CSS', 'JS']) y backend = new Set(['JS', 'Node', 'SQL']). 
// Escribe código para encontrar los elementos que están en ambos sets (la intersección).

let frontend = new Set(['HTML', 'CSS', 'JS']) 
let backend = new Set(['JS', 'Node', 'SQL'])

let interseccion = [...frontend].filter(elemento => backend.has(elemento));

console.log(interseccion);

//has para comprobar si tiene x y filter para filtrar si elemento contiene a elemnto x
