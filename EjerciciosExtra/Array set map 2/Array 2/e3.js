//Dado un array ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla']. 
//Pide al usuario que introduzca una ciudad y usa indexOf() para indicar su posición. Si no está, informa de ello.

//Enlazando un html seria:

let ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'];

let ciudad = prompt("Introduce la ciudad que buscas: ");

let pos = ciudades.indexOf(ciudad);

if (pos === -1) {
  alert("La ciudad no está en el array");
} else {
  alert("La ciudad está en la posición " + pos);
}

//en clase cambia alert por console log y funciona