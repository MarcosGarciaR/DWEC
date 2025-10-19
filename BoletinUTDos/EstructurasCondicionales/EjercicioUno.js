function pedirRadio() {
  let radioEsfera = parseFloat(prompt("Introduce el radio de la esfera"));

  if (isNaN(radioEsfera) || radioEsfera <= 0) {
    alert("Ingresa un número válido");
  } else {
    /* Math.pow calcula el exponente del radio (2 al cuadrado, 3 al cubo y asi)*/
    let area = 4 * Math.PI * Math.pow(radioEsfera, 2);
    let volumen = (4 / 3) * Math.PI * Math.pow(radioEsfera, 3);

    return alert(
      `Con el radio ${radioEsfera}, obtendremos lo siguiente: 
      \n Area: ${area.toFixed(2)} 
      \n Volumen: ${volumen.toFixed(2)}`
    );
  }
}