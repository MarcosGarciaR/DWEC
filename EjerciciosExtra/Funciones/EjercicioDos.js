function rellenarArray(){
    let array = [2, 3, 5, 4, 9, 3, 4, 5]
    alert(devolverMayor(array));
}

function devolverMayor(arrayNum){
    let mayor = 0;

    /*for( let i = 0; i<arrayNum.length; i++){
        if( arrayNum[i] > mayor){
            mayor = arrayNum[i];
        }
    }
    */
    for (a in arrayNum){
        if(a > mayor){
            mayor = arrayNum[a];
        }
    }
    return mayor;
}