function segundosATiempo(){
let segundosTotales = parseInt(prompt("Introduce el tiempo en segundos:"));

if (isNaN(segundosTotales) || segundosTotales < 0) {
    alert("Por favor, introduce un número entero positivo de segundos.");
} else {
    let horas = Math.floor(segundosTotales / 3600);
    let minutos = Math.floor((segundosTotales % 3600) / 60);
    let segundos = segundosTotales % 60;

    alert(
        `${segundosTotales} segundos equivalen a: ` +
        `\n${horas} horas, ${minutos} minutos y ${segundos} segundos.`
    );
}
}