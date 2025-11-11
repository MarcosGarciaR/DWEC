//Crea una excepción personalizada.

function suma(a,b) {
    if (a==0||b==0) {
        throw new TypeError("Ningun parametro puede ser cero")
    }

    return a+b
}
 
