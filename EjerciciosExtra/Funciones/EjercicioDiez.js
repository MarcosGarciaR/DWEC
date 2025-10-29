function factorial(num) {
  if (num < 0) return "No existe el factorial de un número negativo";
  if (num === 0 || num === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}


function pedirNumero(){
    let miNumero;
    do{
        miNumero = parseInt(prompt("Introduce el numero"))
    }while(isNaN(miNumero));

    alert('!'+ miNumero + ' = '+ factorial(miNumero));
}