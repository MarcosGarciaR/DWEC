function numerosParaSuma(){
    let num1 = parseFloat(prompt("Introduce el primer numero"));
    let num2 = parseFloat(prompt("Introduce el segundo numero"));
    devolverSumaDosNumeros(num1, num2);
}

function devolverSumaDosNumeros(num1, num2){
    if(!isNaN(num1) && !isNaN(num2)){
        return alert(num1 + num2);
    }else{
        alert("Algún numero no es correcto");
    }
}
