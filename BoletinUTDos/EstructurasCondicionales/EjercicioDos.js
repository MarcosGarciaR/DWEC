function valorAbsoluto(){
    let numero = parseInt(prompt("Introduce un numero"));

    if(isNaN(numero)){
        alert("Ingresa un valor válido");
    }else{
    let numeroAbsoluto = Math.abs(numero);
        alert(`El valor absoluto de ${numero} es : \n\n${numeroAbsoluto}`);
    }
}