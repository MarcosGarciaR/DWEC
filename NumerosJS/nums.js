
function introducirNumeros(numNumeros) {

    let numeros = Array(numNumeros);

    for (i = 0; i < numeros.length; i++) {
        let cont = parseInt(0);
        do {
            if (cont <= 2) {
                num = parseInt(prompt("Introduce el numero " + (i + 1)));
                cont++;
            } else {
                num = parseInt(prompt("Capullo pon el numero " + (i + 1) + " bien"));
            }
            numeros[i] = num;
        }
        while (isNaN(numeros[i]));
    }

    return numeros;
}

function suma() {
    numeros = introducirNumeros(numNumeros);
    let res = parseFloat(0);
    for (pos = 0; pos < numeros.length; pos++) {
        res += numeros[pos];
    }
    return res;
}

function resta() {
    numeros = introducirNumeros(numNumeros);
    let res = parseFloat(numeros[0]);
    for (pos = 1; pos < numeros.length; pos++) {
        res -= numeros[pos];
    }
    return res;
}

function multiplicacion() {
    numeros = introducirNumeros(numNumeros);
    let res = parseFloat(numeros[0]);
    for (pos = 1; pos < numeros.length; pos++) {
        res *= numeros[pos];
    }
    return res;
}

function division() {
    numeros = introducirNumeros(numNumeros);
    let res = parseFloat(numeros[0]);
    for (pos = 1; pos < numeros.length; pos++) {
        res %= numeros[pos];
    }
    return res;
}

let numNumeros;
do {
    alert("1 - SUMA \n 2 - RESTA \n 3 - MULTIPLICACION \n 4 - DIVISION");

    let operador = parseInt(prompt("Introduce un numero a operar"));

    switch (operador) {
        case 1:
            numNumeros = parseInt(prompt("Introduce cuantos numeros habrá que sumar"));
            alert(`El sumatorio es: ${suma()}`);
            break;

        case 2:
            numNumeros = parseInt(prompt("Introduce cuantos numeros habrá que restar"));
            alert(`La resta es: ${resta()}`);
            break;

        case 3:
            numNumeros = parseInt(prompt("Introduce cuantos numeros habrá que multiplicar"));
            alert(`La multiplicacion es: ${multiplicacion()}`);
            break;

        case 4:
            numNumeros = parseInt(prompt("Introduce cuantos numeros habrá que dividir"));
            alert(`La division es: ${division()}`);
            break;
        default:
    }
    operador = prompt("Introduce un numero para continuar, 0 para salir");
} while (operador != 0);