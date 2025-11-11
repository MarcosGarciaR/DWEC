//Utiliza el método keys() junto con un bucle for...of para imprimir solo las claves del Map.

let traducciones = new Map()

traducciones.set("hello","hola")
traducciones.set("bye", "adiós")
let config ={version: 1.0}
traducciones.set(1, "Primer Nivel")
traducciones.set(config, "Configuración Global")

for (let clave of traducciones.keys()) {
    console.log(clave);
}
