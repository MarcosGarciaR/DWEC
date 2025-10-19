function verEstadoNota() {
    let nota;

    do {
        nota = parseFloat(prompt("Introduce la nota (entre 0 y 10):"));
    } while (isNaN(nota) || nota < 0 || nota > 10);

    let resultado = "";

    if (nota < 5) {
        resultado = "SUSPENSO";
    } else if (nota < 6) {
        resultado = "APROBADO";
    } else if (nota < 7) {
        resultado = "BIEN";
    } else if (nota < 9) {
        resultado = "NOTABLE";
    } else {
        resultado = "SOBRESALIENTE";
    }
    alert("La calificación es: " + resultado + `\n\nNota: ${nota}`);
}
