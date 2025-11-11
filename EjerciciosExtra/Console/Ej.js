// 1. Crea un función que utilice error correctamente
function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.error("Hay un error"); // muestra el error en consola
        return "Introduce numeros"
    }else{
        return a+b
    }
    
}
console.log(suma("a",2))

//========================================================================================

// 2. Crea una función que utilice warn correctamente
function suma2(a, b){
    if(isNaN(a) || isNaN(b)){
        console.warn("Error que deberías revisar");
        return 0;
    }else{
        return a + b;
    }

}

console.log(suma2("jk", 5));

//========================================================================================

// 3. Crea una función que utilice info correctamente

function suma3(a, b) {
    if (isNaN(a) || isNaN(b)) { 
        console.info("Hay un error que deberías revisar");
        return 0;
    } else {
        return a + b;
    }
}

console.log(suma3("a", 10)); 

//========================================================================================

// 4. Utiliza table

miTabla = [
    {obj:"animal", tipo:"perro"},
    {obj:"animal", tipo:"gato"},
    {obj:"mueble", tipo:"mesa"}
]

console.table(miTabla);


//========================================================================================

// 5. Utiliza group

console.group("Usuario")
console.log("Nombre: Marcos")
console.log("Edad: 19")
console.groupEnd()


//========================================================================================

// 6. Utiliza time

console.time("Tiempo de ejecucion de la suma")

function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Introduce numeros"
    }else{
        return a+b
    }
    
}
console.log(suma(3,2))

console.timeEnd("Tiempo de ejecucion de la suma")


//========================================================================================

// 7. Valida con assert si un número es positivo

  //Si la condicion es verdadera, no pasa nada, en caso contrario muestra el mensaje de error
let numAssert = -2;
console.assert(numAssert > 0, "El número no es positivo");

//========================================================================================

// 8. Utiliza count

console.count("Contador") 
console.count("Contador")
console.count("Contador")
console.countReset("Contador")
console.count("Contador")

//========================================================================================

// 9. Utiliza trace

console.clear(); // limpia la consola
console.trace("Rastreo simple");

    //========================================================================================

// 10. Utiliza clear

console.log("Hola!");
//console.clear(); // limpia la consola
console.log("Consola limpia y mensaje nuevo");