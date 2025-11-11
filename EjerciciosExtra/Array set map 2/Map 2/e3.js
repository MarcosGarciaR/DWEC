//Añade una nueva entrada donde la clave sea un número (1) y el valor sea 'Primer Nivel'. Demuestra que puedes acceder a ella con get(1).

let traducciones = new Map()

traducciones.set("hello","hola")
traducciones.set("bye", "adiós")
traducciones.set(1, "Primer Nivel")

console.log(traducciones.get(1))