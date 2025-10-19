function numeroInverso(){
    let numeroTeclado = parseFloat(prompt("Introduce un numero"));

    if(numeroTeclado === 0){
        alert("No es posible calcular el numero inverso de 0");
    }else if(isNaN(numeroTeclado)){
        alert("Introduce un numero");
    }else{
        let numInverso = 1/numeroTeclado;
        alert(`El numero inverso de ${numeroTeclado} es: \n\n${numInverso}`);
    }
}