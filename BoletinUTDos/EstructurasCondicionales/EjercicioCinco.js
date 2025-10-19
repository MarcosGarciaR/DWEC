function calcularBisiesto(){
    let annyo = parseInt(prompt("Introduce el año"));

    if(annyo % 400 === 0 || ( annyo % 4 === 0 && annyo % 100 != 0 )){
        alert(`El año ${annyo} es bisiesto`);
    }else{
        alert(`El año ${annyo} no es bisiesto`);
    }
}