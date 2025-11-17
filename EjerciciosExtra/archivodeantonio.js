function saludaNombre(){

    console.log("Hola "+nom)
    
    var nom = "Jesú"


}
saludaNombre()


//========================================================================================


let numero2 = 50 

for (let i = 0; i <= numero2; i++) {
    if (i % 15 === 0 && i !== 0) {
      console.log(i + " -> Viva el Sevilla y el Betis");
    } else if (i % 3 === 0 && i !== 0) {
      console.log(i + " -> Viva el Sevilla");
    } else if (i % 5 === 0 && i !== 0) {
      console.log(i + " -> Viva el Betis");
    } else {
      if (i % 2 === 0) {
        console.log(i + " -> Par");
      } else {
        console.log(i + " -> Impar");
      }
    }
  }


//========================================================================================


  function textito(i){

    let texto = ""

    if (i%2 === 0)  {
      texto = i + " -> es par"
    }
    else {
        texto = i + " -> es impar"
    }

    if (i%3 === 0)  {
      texto = i + " -> Viva el Sevilla"
    }
    if (i%5 === 0)  {
      texto = i + " -> Viva el Betis"
    }
    if (i%15 === 0)  {
      texto = i + " -> Viva el Sevilla y el Betis"
    }

    if (i%15 === 0)  {
      texto = i + " -> Viva el Sevilla y el Betis"
    }
     if (i%7 === 0)  {
      texto = i + " -> Viva el Athletic"
    }
    console.log(texto)
}



let numero = 50 

for (let i = 0; i <= numero; i++) {
    textito(i)
  }


//========================================================================================

let num = prompt("Dime un número: ");
let num2 = prompt("Dime otro número: ");
console.log("La suma de " + num + " y " + num2 + " es: " + (parseInt(num) + parseInt(num2)));

let contador = 0;
do {
    let num;
    do {
        num = parseFloat(prompt("Dime un número: "));
        if (isNaN(num)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert("Has superado el número de intentos capullo");
                break;
            }
        }
    } while (isNaN(num) && contador < 3);

    if (contador >= 3) break;

    let num2;
    do {
        num2 = parseFloat(prompt("Dime otro número: "));
        if (isNaN(num2)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert("Has superado el número de intentos capullo");
                break;
            }
        }
    } while (isNaN(num2) && contador < 3);

    if (contador >= 3) break;

    alert("La suma de " + num + " y " + num2 + " es: " + (num + num2));
} while (contador < 3);



let contador = 0;
do {
    let num;
    do {
        num = parseFloat(prompt("Dime un número: "));
        if (isNaN(num)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert("CAPULLO PON UN NUMERO");
            }
        }
    } while (isNaN(num));

    let num2;
    do {
        num2 = parseFloat(prompt("Dime otro número: "));
        if (isNaN(num2)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert("CAPULLO PON UN NUMERO");
            }
        }
    } while (isNaN(num2));

    
    alert("La suma de " + num + " y " + num2 + " es: " + (num + num2));
    
} while (contador < 3);


let contador = 0;
let cantidad;

let mensajeError = prompt("Introduce el mensaje personalizado para cuando falles 3 veces:");

do {
    cantidad = parseInt(prompt("¿Cuántos números quieres sumar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Eso no es un número válido");
        contador++;
        if (contador >= 3) {
            alert(mensajeError);
        }
    }
} while ((isNaN(cantidad) || cantidad <= 0));

let suma = 0;

for (let i = 0; i < cantidad; i++) {
    let num;
    do {
        num = parseFloat(prompt(`Dime el número ${i + 1}: `));
        if (isNaN(num)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert(mensajeError);
            }
        }
    } while (isNaN(num));
    suma += num;
}
alert("La suma de los " + cantidad + " números es: " + suma);


let cadenaN=prompt("Introduce un numero: ")
let numeros = cadenaN.split('')

for (let i = 0; i < numeros.length; i++) {
    alert(parseInt(numeros[i]))
}



/*let vnull = null

console.log(typeof(vnull))

let vbig = BigInt(888888888888888888888888888888888888888888)

let vbig2 = 88n

console.log(typeof(vbig2))

let a = 1
console.log("==")
console.log(a=="1")
console.log(a=='1')
console.log(a==1)
console.log("===")
console.log(a==="1")
console.log(a==="1")

let vnombre = "Jumanji"
let vcad1="Estimado señor ${vnombre}\n"
vcad1 = vcad1+"Tras la conversación mantenida...a \n"
console.log(vcad1)

let vcad2=`Estimado señor
            Tras la conversación mantenida...a
            Atentamente 
            ${vnombre}`

console.log(vcad2) 
//
let condi = 33

if (condi==33){
    console.log("33") 
}
else {
    console.log("otro número") 
}

condi = 34
console.log(condi===33 ? "33":"otro número")
//*/

let vpalabra ='Israel no viene, donde estará Israel'

console.log(typeof(vpalabra))

let n = vpalabra.length
let p = vpalabra.indexOf("e",5)
let tr = vpalabra.slice(0,8)

console.log(vpalabra.slice(0,8))
console.log(vpalabra.slice(1,8))




let cadena1 = "Hola, ";
let cadena2 = "¿cómo estás?";
console.log(cadena1 + cadena2); 

// 2. Muestra la longitud de una cadena de texto
let cadena3 = "Paco, espero que estés bien";
console.log(cadena3.length);

// 3. Muestra el primer y último carácter de un string
let cadena4 = "Esto es una prueba";
console.log(cadena4.charAt(0));
console.log(cadena4.charAt(cadena4.length - 1));

// 4. Convierte a mayúsculas y minúsculas un string
let cadena5 = "Paco, ¿el partido como fué?";
console.log(cadena5.toUpperCase());
console.log(cadena5.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let cadena6 = `Hola,
Paco`;
console.log(cadena6);

// 6. Interpola el valor de una variable en un string
let nombre = "Paco";
let cadena7 = Hola, ${nombre};
console.log(cadena7);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena8 = "Hola Paco, ¿cómo estás?";
console.log(cadena8.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let cadena9 = "Paco, tu madre me llamó";
console.log(cadena9.includes("madre"));

// 9. Comprueba si dos strings son iguales
let cadena10a = "Hola";
let cadena10b = "Hola";
console.log(cadena10a === cadena10b);

// 10. Comprueba si dos strings tienen la misma longitud
let cadena11a = "Hola";
let cadena11b = "Adiós";
console.log(cadena11a.length === cadena11b.length);
// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Paco";
if (nombre === "Paco") {
    console.log(nombre);
}else{
    console.log("No es Paco");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "Paco";
let contrasena = "1234";
if (usuario === "admin" && contrasena === "1234") {
    console.log("Acceso concedido");
}else{
    console.log("Acceso denegado");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0;
if (numero > 0) {
    console.log("El número es positivo");
}else if (numero < 0) {
    console.log("El número es negativo");
}else {
    console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 12;
if (edad >= 18) {
    console.log("Puedes votar");
}else if (edad < 0) {
    console.log("Edad no válida");
}else {
    console.log(No puedes votar, te faltan ${18 - edad} años);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad2 = 20;
let categoria = (edad2 >= 18) ? "adulto" : "menor";
console.log(categoria);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Octubre";
if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
    console.log("Invierno");
}
else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
    console.log("Primavera");
}
else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
    console.log("Verano");
}
else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
    console.log("Otoño");
}
else {
    console.log("Mes no válido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mes2 = "Febrero";
if (mes2 === "Enero" || mes2 === "Marzo" || mes2 === "Mayo" || mes2 === "Julio" || mes2 === "Agosto" || mes2 === "Octubre" || mes2 === "Diciembre") {
    console.log("31 días");
}else if (mes2 === "Abril" || mes2 === "Junio" || mes2 === "Septiembre" || mes2 === "Noviembre") {
    console.log("30 días");
}else if (mes2 === "Febrero") {
    console.log("28 o 29 días");
}else {
    console.log("Mes no válido");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "ep";
switch (idioma) {
    case "es":
        console.log("Hola");
        break;
    case "en":
        console.log("Hello");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    case "de":
        console.log("Hallo");
        break;
    default:
        console.log("Idioma no encontrado");
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes3 = "Julio";
switch (mes3) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Invierno");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Primavera");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Verano");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Otoño");
        break;
    default:
        console.log("Mes no válido");
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes4 = "Febrero";
switch (mes4) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log("31 días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log("30 días");
        break;
    case "Febrero":
        console.log("28 o 29 días");
        break;
    default:
        console.log("Mes no válido");
        break;
}

//CALCULAR BINARIO

while (numero > 0) {
      let resto = numero % 2;
      binario = resto + binario;
      numero = parseInt(numero / 2);
    }

    alert("El número en binario es: " + binario);


    function decimalBinario(){

  let numero = parseInt(prompt("Introduce un número entero positivo:"));

    if (isNaN(numero) || numero < 0) {
      alert("Error: introduce un número entero positivo.");
    } else if (numero === 0) {
      alert("El número en binario es: 0");
    } else {
      let binario = "";

    while (numero > 0) {
      let resto = numero % 2;
      binario = resto + binario;
      numero = parseInt(numero / 2);
    }

    alert("El número en binario es: " + binario);
  }
}


let bits = [];
    let valor = numero;
    while (valor > 0) {
        let resto = valor % 2;
        bits.push(resto);
        valor = Math.floor(valor / 2);
    }
    bits.reverse();

function pasoBinarioArray(num){
    let bits = [];
    let resto

    if (isNaN(num) || num < 0) {
      return "Error: introduce un número entero positivo."
    } else if (num === 0) {
      return 0
    }
        
    while (num > 0) {
        resto = num % 2;
        bits.push(resto);
        num = Math.floor(num / 2);
    }
    //bits.reverse();
    return bits.reverse().join('')
}

//FUNCION FLECHA

console.log("******VAMOS CON LA FLECHA**********")

const validaFlechaDNI = (dni) =>((dni.toUpperCase().slice(-1) == calculaLetra(parseInt(dni.slice(0,-1)))) ? "VALIDO":"NO VALIDO")

console.info(validaFlechaDNI("12345678Z"))