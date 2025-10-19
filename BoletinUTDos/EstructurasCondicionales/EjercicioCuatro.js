function leerTiempo() {
    let hora = parseInt(prompt("Introduce la hora (0-23H)"));
    let minuto = parseInt(prompt("Introduce el minuto (0-59)"));

    if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59) {
        if ((hora === 7 && minuto >= 30) || (hora > 7 && hora < 14) || (hora === 14 && minuto === 0)) {
            alert("Buenos días");
        } else if ((hora === 14 && minuto >= 1) || (hora > 14 && hora < 20) || (hora === 20 && minuto <= 30)) {
            alert("Buenas tardes");
        } else {
            alert("Buenas noches");
        }
    } else {
        alert("Tiempo introducido no válido.");
    }
}
