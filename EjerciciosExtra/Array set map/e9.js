// Crear un Map con los meses del año
let meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
]);

// Añadir una clave con un array de meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"]);
// .set(clave, valor) → añade o actualiza un elemento del Map
// En este caso, la clave "verano" tiene como valor un array

// Mostrar solo los meses de verano
console.log("Meses de verano: " + meses.get("verano").join(", ")); 
// .get("verano") devuelve el array asociado a la clave
// .join(", ") convierte el array en un string legible
