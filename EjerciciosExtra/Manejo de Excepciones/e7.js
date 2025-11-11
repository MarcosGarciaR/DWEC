//Captura varias excepciones en un mismo try-catch.

function suma(a,b) {
    if (a==0||b==0) {
        throw new TypeError("Ningun parametro puede ser cero")
    }

    if (isNaN(a)||isNaN(b))
        throw new TypeError("Los parametros deben ser numeros")

    return a+b
}

//Para que salga la primera excepción
try {
    console.log(suma(3,4)) //Funciona
    console.log(suma(0,4)) //lanzara el primer error
}
catch (error){
    console.log(error.message)
} 

//Para que salga la segunda excepción
try {
    console.log(suma("a",4)) //lanzara el segundo error
}
catch (error){
    console.log(error.message)
}   