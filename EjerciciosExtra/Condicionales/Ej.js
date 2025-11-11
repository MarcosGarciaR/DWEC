let usuario = "Paco";
let password = "Hola2025.";

let usuarioVerificacion = "Paco"
let passVerificacion = "Hola2025.";

if(usuario === usuarioVerificacion && password === passVerificacion){
    console.log(`Bienvenido ${usuario}`)
}else{
    console.log("Algun dato no coincide")
}

//========================================================================================

let num = 0

if(!isNaN(num)){
    if(num>0){
        console.log(`El numero ${num} es positivo`)
    }else if (num < 0 ){
        console.log(`El numero ${num} es negativo`)
    }else{
        console.log(`El numero es ${num}`)
    }
}

//========================================================================================

let edad2 = 20;
let tipo = (edad2 >=18 ? 'adulto': 'menor');
console.log(tipo)

//========================================================================================

let idioma = 'spanish';
mensaje = '';
switch(idioma){
    case 'spanish':
    mensaje+='Hola'
    break;
    case 'english':
    mensaje+='Hello'
    break;
    case 'french':
    mensaje+='Bonjour'
    break;

    default:
    mensaje+='Hola';
}
console.log(mensaje)

//========================================================================================


