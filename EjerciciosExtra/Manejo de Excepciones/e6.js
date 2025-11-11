//Lanza varias excepciones según una lógica definida.

function suma(a,b) {
    if (a==0||b==0) {
        throw new TypeError("Ningun parametro puede ser cero")
    }

    if (isNaN(a)||isNaN(b))
        throw new TypeError("Los parametros deben ser numeros")

    return a+b
}
