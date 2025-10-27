function crearExcepcion(a = 0, b = 1){
    if(a + b != 0){
        throw new TypeError("Los numeros no están bien");
    }

    return a + b;
}