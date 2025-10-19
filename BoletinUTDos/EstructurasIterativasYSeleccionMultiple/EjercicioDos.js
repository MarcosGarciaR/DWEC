function mayorMenoryMedia(){
    let nums = parseInt(prompt("¿Cuántos números vas a introducir?"));

    if (isNaN(nums) || nums <= 0) {
        alert("Por favor introduce una cantidad válida.");
    } else {
        let numero = parseFloat(prompt("Introduce el primer número positivo:"));
        
        if (numero < 0 || isNaN(numero)) {
            alert("Solo se permiten números positivos.");
        } else {
            let menor = numero;
            let mayor = numero;
            let suma = numero;

            for (let i = 2; i <= nums; i++) {
                numero = parseFloat(prompt("Introduce el siguiente número positivo:"));

                if (numero < 0 || isNaN(numero)) {
                    alert("Número inválido. Se detiene el programa.");
                    break;
                }

                if (numero < menor) menor = numero;
                if (numero > mayor) mayor = numero;

                suma += numero;
            }

            let media = suma / nums;
            alert(
                `Menor: ${menor}\nMayor: ${mayor}\nMedia: ${media.toFixed(2)} \n\nTotal de números: ${nums}` 
            );
        }
}
}