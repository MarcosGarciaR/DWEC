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
// new Map(array de pares [clave, valor]) → crea un Map
// Los Maps permiten claves de cualquier tipo y mantienen el orden de inserción

// Obtener el valor de una clave concreta
console.log("El mes número 5 es: " + meses.get(5)); 
// .get(clave) → devuelve el valor asociado a esa clave
