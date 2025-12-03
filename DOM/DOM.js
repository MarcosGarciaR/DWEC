/* MANEJANDO EL DOM */
console.log("--- El objeto document")
console.log(document)

// 1- SELECCION DE ELEMENTOS
// Elementos y colecciones
const myElementById = document.getElementById('title')
console.log(`Por ID:`, myElementById.textContent)

const myElementByClass = document.getElementsByClassName('paragraph')
console.log(`Por CLASE:`, myElementByClass)
//alert(`Por ID: ` + myElementById.array.forEach(element => { element.textContent }));

const myElementByTagName = document.getElementsByTagName('li')
    console.log(`Por TAGNAME:`, myElementByTagName)


const primerParrafo = document.querySelector(".paragraph")
console.log("Quesy Selector Primer Elemento:", primerParrafo)


const todosParrafos = document.querySelectorAll('.paragraph')
for (let i = 0; i < todosParrafos.length; i++) {
    alert("Por etiqueta: "+todosParrafos[i].textContent)
    
} 


// MANIPULACION DE ELEMENTOS

const title = document.getElementById('title')
title.textContent = 'Nuevo titulo cambiado'

//const container = document.getElementsByClassName("container")
const container = document.querySelector(".container")
container.innerHTML = "<p>PARRAFO CAMBIADO</p>"


const link = document.querySelector('a')
console.log('a original:',link.getAttribute('href'))

link.setAttribute('href', 'https://www.marca.com')
link.textContent = "A Marca"



// INTERACTUAR CON LOS ESTILOS
const button = document.querySelector('button')
button.style.backgroundColor = 'blue'
button.style.color = 'white'
button.style.padding = '12px'
button.textContent = "Cambiado por JS"

// CREACION DE OBJETOS
const newParagraph = document.createElement('p')
newParagraph.textContent = "Nuevo parrafo de JS"

container.appendChild(newParagraph)


// ELIMINAR OBJETOS
setTimeout(() => {
    //newParagraph.remove()
    const parent = newParagraph.parentElement
    parent.removeChild(newParagraph)    
}
    , 3000
)

// EVENTOS
function fClic(){
    alert("Clic detectado")
}

const sendButton = document.querySelector("#send");
sendButton.addEventListener("click", fClic)

sendButton.addEventListener('click', () => console.log("He hecho click"))


// SABER QUE ESTA CARGADO EL DOM

document.addEventListener('DOMContentLoaded', () => console.log("DOM cargado"))

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "aqua"
    sendButton.style.color = "red"
})
sendButton.style.backgroundColor = "pink"



