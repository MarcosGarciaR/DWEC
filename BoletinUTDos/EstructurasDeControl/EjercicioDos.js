function calcularMonedas(){
    const monedas = [200, 100, 50, 20, 10, 5, 2, 1]; 

    let cantidad = parseFloat(prompt("Introduce la cantidad en euros:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida. Debe ser un número mayor que 0.");
    } else {
        let restante = Math.round(cantidad * 100); // Pasamos a céntimos
        let resultado = `Cantidad: €${cantidad.toFixed(2)}\nDesglose mínimo de monedas:\n`;

        for (let moneda of monedas) {
            let num = Math.floor(restante / moneda);
            if (num > 0) {
                if (moneda >= 100) {
                    resultado += `${num} x ${(moneda / 100).toFixed(0)} €\n`;
                } else {
                    resultado += `${num} x ${moneda} céntimos\n`;
                }
                restante %= moneda;
            }
        }
        alert(resultado);
}
}