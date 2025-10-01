let cadenaN=prompt("Introduce un numero: ")
let numeros = cadenaN.split('')

for (let i = 0; i < numeros.length; i++) {
    alert(parseInt(numeros[i]))
}