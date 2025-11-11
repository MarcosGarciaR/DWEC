//Crea un objeto admin = {id: 99}. Usa este objeto admin como clave en un nuevo Map llamado roles y asóciale el valor 'Administrador'. 
// Muestra el valor que se obtiene al buscar con la clave admin.

let admin = {id: 99}

let roles = new Map()

roles.set(admin, "Administrador")

console.log(roles.get(admin))
