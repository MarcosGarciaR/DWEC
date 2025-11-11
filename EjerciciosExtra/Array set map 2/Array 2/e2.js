// Añade 'Diciembre Bis' al final de meses y elimina 'Enero' del principio. Muestra el array final.

let meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

meses.push("Diciembre Bis")

meses.shift(0)

console.log(meses)