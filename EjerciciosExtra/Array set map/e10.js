let comida = ["Patatas","Pizza","Palomitas"]; 
// Array inicial de comidas

let comidaSet = new Set(comida); 
// Creamos un Set a partir del array
// Set → almacena valores únicos, elimina duplicados si los hubiera

let comidaMap = new Map();  
// Creamos un Map vacío

comidaMap.set("comidas", comidaSet); 
// .set(clave, valor) → añade un par clave-valor al Map
// La clave es "comidas" y el valor es un Set de las comidas

// Recorrer el Map
for (let [clave, valor] of comidaMap) {
  // 'clave' = "comidas", 'valor' = Set { "Patatas", "Pizza", "Palomitas" }
  for (let item of valor) {
    // Recorremos el Set dentro del Map
    console.log("Comida: " + item);
  }
}
