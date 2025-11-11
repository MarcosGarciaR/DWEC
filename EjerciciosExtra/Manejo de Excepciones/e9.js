//Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada.

function verificarPropiedad(objeto, prop) {
    //con .hasOwnProperty miro si lo tiene
    if (!objeto.hasOwnProperty(prop)) {
        throw new TypeError("El objeto no tiene la propiedad " + prop);
    }

    return objeto[prop];
}

const persona = { nombre: "Juan", edad: 30 };

try {
    console.log(verificarPropiedad(persona, "nombre")); // Funciona: imprime "Juan"
    console.log(verificarPropiedad(persona, "peso")); // No existe: lanza error
} catch (error) {
    console.log(error.message);
}
