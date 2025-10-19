function esFechaValida(dia, mes, anio) {
    let fecha = new Date(anio, mes - 1, dia);
    return (
        fecha.getFullYear() === anio &&
        fecha.getMonth() === mes - 1 &&
        fecha.getDate() === dia
    );
}

function leerFecha(mensaje) {
    let dia = parseInt(prompt(`Introduce el día de ${mensaje}:`));
    let mes = parseInt(prompt(`Introduce el mes de ${mensaje}:`));
    let anio = parseInt(prompt(`Introduce el año de ${mensaje}:`));

    if (isNaN(dia) || isNaN(mes) || isNaN(anio) || !esFechaValida(dia, mes, anio)) {
        alert("Fecha no válida. Inténtalo de nuevo.");
        return leerFecha(mensaje); 
    }

    return new Date(anio, mes - 1, dia);
}

function verFechas(){
let fecha1 = leerFecha("la primera fecha");
let fecha2 = leerFecha("la segunda fecha");


if (fecha1.getTime() < fecha2.getTime()) {
    alert("La primera fecha es anterior a la segunda.");
} else if (fecha1.getTime() > fecha2.getTime()) {
    alert("La segunda fecha es anterior a la primera.");
} else {
    alert("Es la misma fecha.");
}
}