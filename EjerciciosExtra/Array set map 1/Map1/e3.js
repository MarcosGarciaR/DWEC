// Itera sobre usuariosOnline usando el método entries() e imprime cada par [clave, valor].

let usuariosOnline = new Map()
usuariosOnline.set("user1", "Ana")
usuariosOnline.set("user2", "Pedro")

let iterador = usuariosOnline.entries()

console.log(iterador.next().value)
console.log(iterador.next().value)