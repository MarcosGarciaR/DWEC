function esPrimo(numero){
    if( numero === 1 || numero % 2 === 0){
        return false;
    }

    let raiz = Math.sqrt(numero);

    for( let i = 3; i <=raiz; i+=2){
        console.log(numero % i)
        if(numero % i === 0){
            return false;
        }
    }

    return true;
}


function ingresarNumero(){
    let numero;
    do{
        numero = parseInt(prompt("Introduce un numero"));
    }while(isNaN(numero) || numero < 1);

    alert(esPrimo(numero) ? ('El numero '+ numero + ' es primo'): 'No es primo');
}