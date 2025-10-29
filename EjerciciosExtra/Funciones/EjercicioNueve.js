function invertirPalabras(cadena){
    return cadena.split(' ').reverse().join(' ');
}

function iniciarReverso(){
const texto = prompt("Introduce la cadena");

alert(invertirPalabras(texto));
}