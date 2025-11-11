//Utiliza el método entries() para recorrer el Map e imprimir cada par en el formato Clave: [clave], Valor: [valor].
let config ={version: 1.0}

let traducciones = new Map([
    ["hello","hola"],
    ["bye","adiós"],
    [1,"Primer Nivel"],
    [config,"Configuración Global"]
])

let iterador = traducciones.entries();

for (let i = 0; i < traducciones.size; i++) {
    let [clave, valor] = iterador.next().value;
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}
