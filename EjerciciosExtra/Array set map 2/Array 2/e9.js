//En el array productos, usa find() para localizar y mostrar el objeto completo del producto con el nombre 'Portátil'.

let productos = [
  { nombre: 'Portátil', precio: 1200 },
  { nombre: 'Ratón', precio: 25 },
  { nombre: 'Monitor', precio: 300 }
];

let productoEncontrado = productos.find(productos => productos.nombre === 'Portátil'); //creo un array donde almaceno aquel cuyyo nombre sea portatil

console.log(productoEncontrado);
