//Crea un objeto config = {version: 1.0}. Usa este objeto config como clave en traducciones y asocia el valor 'Configuración Global'.
//Muestra el valor que obtienes al buscar con la clave config.

let traducciones = new Map()

traducciones.set("hello","hola")
traducciones.set("bye", "adiós")

let config ={version: 1.0}

traducciones.set(1, "Primer Nivel")
traducciones.set(config, "Configuración Global")

console.log(traducciones.get(config))