function sumaPares(miArray){
    let sumaFinal = 0;
    let miAlertFinal = 'Números pares:\n';
    for(let i = 0; i < miArray.length; i++){
        if(miArray[i] % 2 === 0){
            miAlertFinal += (sumaFinal + miArray[i] + ' ')
            sumaFinal += miArray[i];
        }
    }

    miAlertFinal += '\n\nSuma final: ' + sumaFinal
    return miAlertFinal;
}

function rellenarArray(){
    let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    alert(sumaPares(miArray));
}