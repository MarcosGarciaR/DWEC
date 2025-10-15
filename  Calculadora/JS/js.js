const display = document.getElementById("areaMuestra");

function concatCadena(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calcular() {
    try {
        let resultado = eval(display.value);
        if (!Number.isInteger(resultado)) {
            resultado = parseFloat(resultado.toFixed(4));
        }

        display.value = resultado;
    } catch {
        display.value = "0";
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Syntax Error";
    }
}

function agregarPi() {
    display.value += "3.14";
}

function reset() {
    display.value = "0";
}

function borrar() {
    display.value = display.value.slice(0, -1);
    if ((display.value === "") | (display.value === "Syntax Error")) {
        display.value = "0";
    }
}


/*Configuración de los botones con hover (Listener) */
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        if (btn.classList.contains("par")) {
        btn.style.backgroundColor = "green";
            } else if (btn.classList.contains("impar")) {
        btn.style.backgroundColor = "red";
        } else if (btn.classList.contains("signo")) {
        btn.style.backgroundColor = "yellow";
        } else if (btn.id.includes("signoIgual")) {
        btn.style.backgroundColor = "lightskyblue";
        } else if (btn.classList.contains("especiales")) {
        btn.style.backgroundColor = "rgba(7, 11, 122, 1)";
        }
    });

    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "";
    });
});
