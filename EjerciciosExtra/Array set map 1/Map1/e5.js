// Diseña una función obtenerConfiguracion(clave) que use un Map para cachear los resultados.
// Si la clave ya está en el Map, devuelve el valor cacheado (simula un acceso rápido). 
// Si no está, simula una "consulta lenta" (p. ej., console.log('Consultando API...') y guarda el resultado en el Map antes de devolverlo.

// Map para cachear resultados
const cache = new Map();

// Función que obtiene configuración simulando una "consulta lenta"
function obtenerConfiguracion(clave) {
    // Si el valor ya está en el cache, devolverlo
    if (cache.has(clave)) {
        console.log('Devolviendo desde cache...');
        return cache.get(clave);
    }

    // Simular una consulta lenta (p. ej., a una API)
    console.log('Consultando API...');
    const resultado = `Valor de ${clave}`; // Aquí se podría obtener realmente de la API

    // Guardar en el cache antes de devolver
    cache.set(clave, resultado);

    return resultado;
}

// Ejemplo de uso
console.log(obtenerConfiguracion('tema')); // Consultando API... Valor de tema
console.log(obtenerConfiguracion('tema')); // Devolviendo desde cache... Valor de tema
console.log(obtenerConfiguracion('idioma')); // Consultando API... Valor de idioma
console.log(obtenerConfiguracion('idioma')); // Devolviendo desde cache... Valor de idioma


//No lo entendi muy bien la vrd
