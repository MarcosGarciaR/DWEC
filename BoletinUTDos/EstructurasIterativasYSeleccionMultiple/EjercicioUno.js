function numerosNaturales(){
    let nums = parseInt(prompt("Introduce cuantos numeros desea ver:"));

    if (isNaN(nums) || nums <= 0) {
        alert("Introduce un número válido mayor que 0");
    } else {
        let resultado = "";
        let suma = 0;

        for (let i = 1; i <= nums; i++) {
            let cuadrado = Math.pow(i, 2);
            let cubo = Math.pow(i, 3);
            resultado += `Número: ${i} | Cuadrado: ${cuadrado} | Cubo: ${cubo}\n`;
            suma += i;
        }

        resultado += `\nLa suma de los ${nums} primeros naturales es: ${suma}`;
        alert(resultado);
    }
}