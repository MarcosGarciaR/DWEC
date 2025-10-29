function combinarArrays( array1 = 0, array2 = 0){
    return array1.filter(valorActual => array2.includes(valorActual));
}

function rellenarArrays(){
let array1 = ['pepe', 'paco', 'pedro', 'roberto']
let array2 = ['pedro','luis','juan','pepe']

alert(combinarArrays(array1, array2));
}