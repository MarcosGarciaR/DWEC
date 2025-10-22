function calcularDNI(numeroDNI) {
    /*
    let numeroDNI = prompt("Introduce los 8 dígitos del DNI (sin letra):");
    */
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let indice = parseInt(numeroDNI) % 23;
    let letraDNI = letras.charAt(indice);
    return letraDNI;
}
console.log(calcularDNI('26906866'));

const validaFlechaDNI = (dni) =>((dni.toUpperCase().slice(-1) == calculaLetra(parseInt(dni.slice(0,-1)))) ? "VALIDO":"NO VALIDO")
console.info(validaFlechaDNI("12345678Z"))

console.log(validaDNI('26906866V'));

