function arrayUpper(otroArray){
    let miArray = new Array;
    for (let i = 0; i<otroArray.length; i++){
        miArray[i] = otroArray[i];
    }
    return (miArray);
}

function rellenarArray(){
    let primerArray = palabraToArray();
    alert(arrayUpper(primerArray));
}

function palabraToArray(){
    let palabra = prompt("Introduce la palabra");
    let arrayAux = new Array;
    for(let i = 0; i<palabra.length ; i++ ){
        arrayAux[i] = palabra.charAt(i);
    }
    return arrayAux;
}