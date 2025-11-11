//Captura una excepción utilizando try-catch y finally.

try {
    let div = 2 / 0
    console.log("la div es de " + div)

    throw new Error("Fallo en la division")
}
catch (error) {
    console.log(error.message)
}finally{
    console.log("Fin de la ejecucion")
}
