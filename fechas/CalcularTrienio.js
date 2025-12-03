/**
 * Si tu salario base son 1k euros y cobras 100 por trienio 
 * y además entraste el día de tu cumpleaños a trabajar
 * ¿Cuanto cobro a día de hoy?
 */

    let sueldoBase = 1000;
    let aumento = 100;
    let hoy = new Date()
    let fecNac = new Date("2006-01-13")
    let mhoy = hoy.getMonth()
    let mfecNac = fecNac.getMonth()
    let dhoy = hoy.getDay()
    let dfecNac = fecNac.getDay()
    let anhosTrabajados = hoy.getFullYear() - fecNac.getFullYear()
    if ((mhoy < mfecNac) || ((mhoy = mfecNac) & (dhoy < dfecNac))){
        anhosTrabajados -=1
    }
    
    /**** */
    let aumentosRecibidos = Math.floor(anhosTrabajados / 3)
    let sueldoFinal = sueldoBase + (aumentosRecibidos * aumento)


console.log(sueldoFinal)
//document.getElementById("demo").innerHTML = "El sueldo final es: " + sueldoFinal + " euros.";