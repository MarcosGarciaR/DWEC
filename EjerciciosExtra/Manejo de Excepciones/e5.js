//Lanza una excepción personalizada.

function suma(a,b) {
    if (a==0||b==0) {
        throw new TypeError("Ningun parametro puede ser cero")
    }

    return a+b
}
 
try {
    console.log(suma(3,4)) //Funciona
    console.log(suma(0,4)) //lanzara un error
}
catch (error){
    console.log(error.message)
}