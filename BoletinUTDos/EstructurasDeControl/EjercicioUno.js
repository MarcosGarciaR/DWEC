function calcularIngresos(){
    let sumaH = 0, sumaM = 0;
    let countH = 0, countM = 0;

    while (true) {
        let sexo = prompt("Introduce el sexo (H/M) o * para terminar:").toUpperCase();

        if (sexo === "*") {
            break;
        }

        if (sexo !== "H" && sexo !== "M") {
            alert("Entrada inválida. Debes introducir H, M o *.");
            continue;
        }

        let sueldo = parseFloat(prompt("Introduce el sueldo (entre 1000 y 2000):"));

        if (isNaN(sueldo) || sueldo < 1000 || sueldo > 2000) {
            alert("Sueldo inválido. Debe estar entre 1000 y 2000.");
            continue;
        }

        if (sexo === "H") {
            sumaH += sueldo;
            countH++;
        } else {
            sumaM += sueldo;
            countM++;
        }
    }

    let mediaH = countH > 0 ? (sumaH / countH).toFixed(2) : "No hay datos";
    let mediaM = countM > 0 ? (sumaM / countM).toFixed(2) : "No hay datos";


    let totalPersonas = countH + countM;
    let dineroTotal = sumaH + sumaM;
    let mediaGeneral = totalPersonas > 0 ? (dineroTotal / totalPersonas).toFixed(2): "No hay datos";
    
    alert(
        "Resultados:\n" +
        `Total de personas: ${totalPersonas} - Hombres: ${countH} - Mujeres: ${countM} \n\n` +
        `Media salarial de hombres: ${mediaH} €\n` +
        `Media salarial de mujeres: ${mediaM} €\n` +
        `Media total entre todas las personas: ${mediaGeneral}`
    );
}