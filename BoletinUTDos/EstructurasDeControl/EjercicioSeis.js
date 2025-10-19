function juego(){
        alert("¡Bienvenido al juego de '¿Dónde está la bolita?'! \n\n" 
            + "Hay 3 vasos, uno de ellos tiene una bolita debajo. \nIntenta adivinar cuál.");

    let bolita = Math.floor(Math.random() * 3) + 1;

    let intento = parseInt(prompt("Elige un vaso: 1, 2 o 3"));

    while (intento < 1 || intento > 3 || isNaN(intento)) {
        intento = parseInt(prompt("Por favor, ingresa un número válido: 1, 2 o 3"));
    }

    if (intento === bolita) {
        alert("¡Felicidades! Has encontrado la bolita.");
    } else {
        alert("Oh no, la bolita estaba bajo el vaso número " + bolita + ".");
    }
}