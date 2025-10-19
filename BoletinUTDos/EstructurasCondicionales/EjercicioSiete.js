function calcularCambio() {
    let precio = parseFloat(prompt("Introduce el precio del producto: (UTILIZAR PUNTO COMO SEPARADOR)"));
    let pagado = parseFloat(prompt("Introduce la cantidad pagada: (UTILIZAR PUNTO COMO SEPARADOR)"));

    if (isNaN(precio) || isNaN(pagado) ) {
        alert("Datos inválidos.");
    } else if( pagado < precio ){
        alert("La cantidad pagada es insuficiente.")
    }else {
        let cambio = pagado - precio;
        let restante = Math.round(cambio * 100); // Lo pasamos a céntimos para evitar errores de decimales

        let billetesMonedas = [
        50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1,
        ]; // En céntimos
        let resultado = "Cambio total: " + cambio.toFixed(2) + " € \nDesglose:\n";

        for (let valor of billetesMonedas) {
        let cantidad = Math.floor(restante / valor);
        if (cantidad > 0) {
            if (valor >= 100) {
            // Billetes y monedas de euro
            resultado += `${cantidad} x € ${(valor / 100).toFixed(2)}\n`;
            } else {
            // Céntimos
            resultado += `${cantidad} x ${valor} céntimos\n`;
            }
            restante %= valor;
        }
        }
        alert(resultado);
    }
}
