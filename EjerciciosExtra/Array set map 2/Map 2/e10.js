// Crea una clase DBManager con un Map privado para almacenar datos. 
// Implementa los métodos guardar(id, dato), obtener(id) y eliminar(id). 
// Asegúrate de que los métodos manejen el caso de que el id no exista, devolviendo null o un mensaje apropiado.

class DBManager {
    // Map privado
    #datos;

    constructor() {
        this.#datos = new Map();
    }

    // Guardar un dato con un id
    guardar(id, dato) {
        this.#datos.set(id, dato);
        console.log(`Dato guardado con id: ${id}`);
    }

    // Obtener un dato por id
    obtener(id) {
        if (this.#datos.has(id)) {
            return this.#datos.get(id);
        } else {
            return null; // o un mensaje como "ID no encontrado"
        }
    }

    // Eliminar un dato por id
    eliminar(id) {
        if (this.#datos.has(id)) {
            this.#datos.delete(id);
            console.log(`Dato con id ${id} eliminado.`);
        } else {
            console.log(`ID ${id} no encontrado.`);
        }
    }
}

// Ejemplo de uso
const db = new DBManager();

db.guardar(1, "Primer registro");
db.guardar(2, "Segundo registro");

console.log(db.obtener(1)); // "Primer registro"
console.log(db.obtener(3)); // null

db.eliminar(2);              // "Dato con id 2 eliminado."
db.eliminar(3);              // "ID 3 no encontrado."
