//Comprueba si los dos objetos creados son iguales

let persona = {
    nombre: "Ana",
    edad: 25
}

let persona1 ={
    nombre: "Antonio",
    edad:20
}

let persona2 ={
    nombre: "Antonio",
    edad:20
}

console.log("Con JSON.stringify " + (JSON.stringify(persona)==JSON.stringify(persona1)))
console.log("Con JSON.stringify " + (JSON.stringify(persona2)==JSON.stringify(persona1)))
