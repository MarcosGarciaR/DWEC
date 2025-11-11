// Array inicial con 5 animales
let animales = ["Zorro", "Perro", "Gato", "Tortuga", "Hamster"];

// Creo un nuevo array vacío
let animales2 = []

// Añadir adelante usando un bucle
for (let i = 0; i <= animales.length; i++) {
    
    if (i == 0) {
        animales2.push("Loro"); 
        console.log("Se agregó un Loro en la posicion " + i);
    } else {
        animales2.push(animales[i - 1]); 
        console.log("Se agregó el animal " + animales[i - 1] + " en la posicion " + (i - 1));
    }
    
}

// Añadir al final
animales2.push("Pez"); 

// Mostrar resultado final
console.log(animales2); 
