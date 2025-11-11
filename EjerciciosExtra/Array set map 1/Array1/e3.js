//Utiliza un bucle for of forEach para impriomir los titulos, luego verifica si la pelicula avatar esta usando includes

// Array de películas
let peliculas = ["Batman", "La lego pelicula", "El señor de los anillos", "SAW III"];

// Recorrer el array con bucle for clásico
for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i]); 
    // Imprime cada título del array
}

// Función para verificar si una película está en el array
function estaPeli(Array, nom) {
    if (Array.includes(nom) == false) {
        // .includes(valor) → devuelve true si el valor existe en el array
        return "La pelicula " + nom + " no esta en el array.";
    } else {
        return "La pelicula " + nom + " esta en el array.";
    }
}

// Verificar si la película "Avatar" está en el array
console.log(estaPeli(peliculas, "Avatar")); 
// Resultado: "La pelicula Avatar no esta en el array."
