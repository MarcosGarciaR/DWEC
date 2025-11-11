let texto = "Aprendiendo JavaScript es divertido";
let palabra = "javascript";

if (texto.toLowerCase().includes(palabra.toLowerCase())) {
    console.log(`La cadena contiene la palabra "${palabra}"`);
} else {
    console.log(`La cadena NO contiene la palabra "${palabra}"`);
}