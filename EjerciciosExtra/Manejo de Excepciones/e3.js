//Lanza una excepción genérica (Ns si es lo mismo que el uno).

try {
    let suma = "a" + 2
    console.log("la suma es de " + suma)

    throw new Error("Fallo en la suma")
}
catch (error) {
    console.log(error.message)
}

