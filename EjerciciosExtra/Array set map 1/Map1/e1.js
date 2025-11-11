// Crea un Map llamado usuariosOnline. Asocia la clave 'user1' al valor 'Ana' y la clave 'user2' al valor 'Pedro' usando set(). 
// Obtén y muestra el nombre asociado a 'user1' usando get().

let usuariosOnline = new Map()

usuariosOnline.set("user1","Ana")
usuariosOnline.set("user2", "Pedro")

console.log(usuariosOnline.get("user1"))