function calcularBinario(){
    let numero = parseInt(prompt("Introduce un número entero positivo en base 10:"));

    if (isNaN(numero) || numero < 0) {
        alert("Número inválido. Debe ser un entero positivo.");
    } else if (numero === 0) {
        alert("La representación binaria de 0 es: 0");
    } else {
        let binario = "";
        let n = numero;
        let pasos = `Pasos para convertir ${numero} a binario:\n\n`;

        while (n > 0) {
            let resto = n % 2;
            let cociente = Math.floor(n / 2);
            pasos += `Dividendo: ${n}, Cociente: ${cociente}, Resto: ${resto}\n`;
            binario = resto + binario; 
            n = cociente;
        }

        pasos += `\nRepresentación binaria de ${numero}: ${binario}`;
        alert(pasos);
}
}