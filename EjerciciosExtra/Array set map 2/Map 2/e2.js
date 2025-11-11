//Usa get() para obtener el valor asociado a 'hello'. Imprime el tamaño del Map con size.

let traducciones = new Map()

traducciones.set("hello","hola")
traducciones.set("bye", "adiós")

console.log(traducciones.get("hello"))
console.log(traducciones.size)