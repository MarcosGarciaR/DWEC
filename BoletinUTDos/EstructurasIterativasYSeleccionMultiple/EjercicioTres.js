function convertirEuros() {
    let repetir = true;

    while (repetir) {
        let cantidad = parseFloat(prompt("Introduce la cantidad en Euros a convertir:"));

        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad inválida. Debes introducir un número mayor que 0.");
            continue;
        }

        let opcion = prompt(
            "Elige la moneda de destino:\n" +
            "1 - Dólares (USD)\n" +
            "2 - Libras (GBP)\n" +
            "3 - Yenes (JPY)\n" +
            "4 - Franco Suizo (CHF)\n" +
            "5 - Corona Noruega (NOK)\n" +
            "Introduce el número correspondiente:"
        );

        let resultado = 0;
        let moneda = "";

        switch (opcion) {
            case "1":
                resultado = cantidad * 1.07; // Tasa estimada
                moneda = "Dólares (USD)";
                break;
            case "2":
                resultado = cantidad * 0.85;
                moneda = "Libras (GBP)";
                break;
            case "3":
                resultado = cantidad * 160;
                moneda = "Yenes (JPY)";
                break;
            case "4":
                resultado = cantidad * 0.95;
                moneda = "Franco Suizo (CHF)";
                break;
            case "5":
                resultado = cantidad * 11.5;
                moneda = "Corona Noruega (NOK)";
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
                continue; // vuelve al inicio del bucle sin preguntar salir
        }

        alert(`${cantidad}€ son ${resultado.toFixed(2)} ${moneda}`);

        repetir = confirm("¿Deseas realizar otra conversión?");
    }

    alert("¡Gracias por usar el conversor!");
}
