// Array inicial con 5 animales
let animales = ["Zorro", "Perro", "Gato", "Tortuga", "Hamster"];

// Creo un nuevo array vacío
let animales2 = [];
// [] → define un array vacío donde podemos ir añadiendo elementos

// Añadir adelante usando un bucle
for (let i = 0; i <= animales.length; i++) {
    
    if (i == 0) {
        animales2.push("Loro"); 
        // .push() añade un elemento al final del array
        console.log("Se agregó un Loro en la posicion " + i);
    } else {
        animales2.push(animales[i - 1]); 
        // añadimos cada elemento del array original
        console.log("Se agregó el animal " + animales[i - 1] + " en la posicion " + (i - 1));
    }
    
}

// Añadir al final
animales2.push("Pez"); 
// .push() se usa de nuevo para añadir "Pez" al final

// Mostrar resultado final
console.log(animales2); 
// Devuelve ["Loro", "Zorro", "Perro", "Gato", "Tortuga", "Hamster", "Pez"]
