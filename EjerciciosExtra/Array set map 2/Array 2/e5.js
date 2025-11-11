//Basándote en el array productos anterior, usa filter() para crear un array productosCaros que solo contenga los productos 
// con un precio superior a 100.

let productos = [{nombre: 'Portátil', precio: 1200}, {nombre: 'Ratón', precio: 25}, {nombre: 'Monitor', precio: 300}]

let productosCaros = productos.filter(productos => productos.precio >100)

console.log(productosCaros);
