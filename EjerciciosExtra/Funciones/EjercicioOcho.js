function numeroAlCuadrado(miArray){
    let otroArray = new Array;
    for(let i = 0; i < miArray.length; i++){
        otroArray[i] = Math.pow(miArray[i], 2);
    }
    return otroArray;
}

function rellenarArrayOcho(){
    let miArray = [2, 3, 4, 5, 6, 7]
    alert(numeroAlCuadrado(miArray))
}