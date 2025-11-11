//Captura una excepción utilizando try-catch.

try {
    let suma = "a" + 2
    console.log("la suma es de " + suma)

    throw new Error("Fallo en la suma")
}
catch (error) {
    console.log(error.message)
}

