function palabraArray(palabra){
    /*let longitud = palabra.length;*/
    let palabraArray = new Array;
    for(let longitud = 0; longitud < palabra.length; longitud++ ){
        palabraArray[longitud] = palabra.charAt(longitud);
    }
    return palabraArray;
}

function pasarPalabra(){
    let palabra = prompt("Introduce la palabra");
    miArray = palabraArray(palabra);
    let laPalabraFinal = '[ ';
    for (let i = 0; i<miArray.length; i++){
        laPalabraFinal += (`${miArray[i]}`)
        if(i < miArray.length-1){
            laPalabraFinal += ', ';
        }else{
            laPalabraFinal += ' ';
        }
    }
    laPalabraFinal += ']';
    
    alert(laPalabraFinal);
}

