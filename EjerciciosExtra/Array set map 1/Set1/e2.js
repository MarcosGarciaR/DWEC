// Verifica si el tag "CSS" existe en tagsUnicos usando has(). Elimina el tag "HTML" usando delete().

let tagsUnicos= new Set(["DAW","CJavaScript","HTML","DAW"]);

console.log(tagsUnicos.has("CSS"))
tagsUnicos.delete("HTML")
console.log(tagsUnicos)