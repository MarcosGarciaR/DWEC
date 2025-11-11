//Itera las propiedades del objeto

let persona = {
    nombre: "Ana",
    edad: 25,
    profesion: "Ingeniera",
}

for (let p in persona) {
    console.log(p, ":", persona[p]);
}