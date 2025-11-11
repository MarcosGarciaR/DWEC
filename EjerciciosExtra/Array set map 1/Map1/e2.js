// Imprime el número de usuarios online con la propiedad size. Verifica si existe el usuario 'user3' usando has().

let usuariosOnline = new Map()

usuariosOnline.set("user1","Ana")
usuariosOnline.set("user2", "Pedro")

console.log(usuariosOnline.size)
console.log(usuariosOnline.has("user3"))
