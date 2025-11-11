//Usa reduce() para calcular la suma total de los precios de todos los productos en el array productos

let productos = [{nombre: 'Portátil', precio: 1200}, {nombre: 'Ratón', precio: 25}, {nombre: 'Monitor', precio: 300}]

let precioProductos = productos.map(productos => productos.precio) //Hago un map con los precios

let suma = precioProductos.reduce((acc, precio) => acc + precio, 0)//Hago el reduce en el nuevo array de precios  lo guardo en suma

console.log(suma)//Muestro por pantalla suma