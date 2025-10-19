function esFechaValida(dia, mes, anio) {
    
    let fecha = new Date(anio, mes - 1, dia);
    return (
        fecha.getFullYear() === anio &&
        fecha.getMonth() === mes - 1 &&
        fecha.getDate() === dia
    );
}

function calcularNumeroTarot(dia, mes, anio) {
    let suma = dia + mes + anio;

    while (suma > 9) {
        let temp = 0;
        while (suma > 0) {
            temp += suma % 10;
            suma = Math.floor(suma / 10);
        }
        suma = temp;
    }

    return suma;
}

function fechaTarot(){
    let dia = parseInt(prompt("Introduce el día de nacimiento:"));
    let mes = parseInt(prompt("Introduce el mes de nacimiento:"));
    let anio = parseInt(prompt("Introduce el año de nacimiento:"));

    if (isNaN(dia) || isNaN(mes) || isNaN(anio) || !esFechaValida(dia, mes, anio)) {
        alert("Fecha no válida. Inténtalo de nuevo.");
    } else {
        let numeroTarot = calcularNumeroTarot(dia, mes, anio);
        alert("Tu número de Tarot es: " + numeroTarot);
    }
}