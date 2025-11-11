//Dado un array productos = [{nombre: 'Portátil', precio: 1200}, {nombre: 'Ratón', precio: 25}, {nombre: 'Monitor', precio: 300}].
//Usa map() para crear un nuevo array llamado nombresProductos que contenga solo los nombres.

let productos = [{nombre: 'Portátil', precio: 1200}, {nombre: 'Ratón', precio: 25}, {nombre: 'Monitor', precio: 300}]

let nombresProductos = productos.map(productos => productos.nombre)

console.log(nombresProductos);