function ejeCoordenadas(){
    let x = parseFloat(prompt("Ingrese la coordenada X:"));
    let y = parseFloat(prompt("Ingrese la coordenada Y:"));

    if (x === 0 && y === 0) {
        alert("El punto está en el origen.");
    } else if (x === 0) {
        alert("El punto está sobre el eje Y.");
    } else if (y === 0) {
        alert("El punto está sobre el eje X.");
    } else if (x > 0 && y > 0) {
        alert("El punto está en el primer cuadrante.");
    } else if (x < 0 && y > 0) {
        alert("El punto está en el segundo cuadrante.");
    } else if (x < 0 && y < 0) {
        alert("El punto está en el tercer cuadrante.");
    } else {
        alert("El punto está en el cuarto cuadrante.");
    }
}