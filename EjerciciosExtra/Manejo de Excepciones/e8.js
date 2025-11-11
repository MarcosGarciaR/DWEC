//Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.

const array1 = ["3.14", "42"];
const array2 = ["3.14", "42", "Hola"];

function pasarValores(valores) {
    let numero=[]

    for (let i = 0; i < valores.length; i++) {
         numero = parseFloat(valores[i]);
         if (isNaN(numero)){
             throw new TypeError("Parametros no convertidos")
         }
    }

    return numero;
}

try{
    console.log(pasarValores(array1))
    console.log(pasarValores(array2))
}catch(error){
    console.log(error.message)
}
