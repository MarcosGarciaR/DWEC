class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let persona1 = new Persona("Pepe", 20);

//========================================================================================

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarAtributos() {
    return "Nombre: " + this.nombre + "\nEdad: " + this.edad;
  }
}

let persona2 = new Persona("Marcos", 19);

//========================================================================================

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarAtributos() {
    return "Nombre: " + this.nombre + "\nEdad: " + this.edad;
  }
}

let persona3 = new Persona("Marcos", 19);

console.log(persona3.mostrarAtributos());

//========================================================================================

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarAtributos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}`;
  }

  static mensajeBienvenida() {
    return "¡Bienvenido a la clase Persona!";
  }
}

let persona4 = new Persona("Marcos", 19);

console.log(persona4.mostrarAtributos());




//========================================================================================

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarAtributos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}`;
  }

  static mensajeBienvenida() {
    return "¡Bienvenido a la clase Persona!";
  }
}

let persona5 = new Persona("Marcos", 19);

console.log(persona5.mostrarAtributos());
  
console.log(Persona.mensajeBienvenida());



//========================================================================================

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarAtributos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;  
  }

  mostrarCurso() {
    return `Curso: ${this.curso}`;
  }
}

let estudiante1 = new Estudiante("Marcos", 19, "Informatica");

console.log(estudiante1.mostrarAtributos());
console.log(estudiante1.mostrarCurso());



//========================================================================================

class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this._nombre = nuevoNombre;
    } else {
      console.log("El nombre no puede estar vacío");
    }
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad >= 0 && !isNaN(nuevaEdad)) {
      this._edad = nuevaEdad;
    } else {
      console.log("La edad no puede ser negativa");
    }
  }

  mostrarAtributos() {
    return `Nombre: ${this._nombre}\nEdad: ${this._edad}`;
  }
}

let persona7 = new Persona("Marcos", 19);

console.log(persona7.nombre);//get
persona7.nombre = "Jose";//set

//========================================================================================

class Persona {
  // Propiedades privadas
  #nombre;
  #edad;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    } else {
      console.log("El nombre no puede estar vacío");
    }
  }

  get edad() {
    return this.#edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad >= 0 && !isNaN(nuevaEdad)) {
      this.#edad = nuevaEdad;
    } else {
      console.log("La edad no puede ser negativa");
    }
  }

  mostrarAtributos() {
    return `Nombre: ${this.#nombre}\nEdad: ${this.#edad}`;
  }
}

let persona8 = new Persona("Marcos", 19);

console.log(persona8.nombre); // get
persona8.nombre = "Jose"; // set
console.log(persona8.mostrarAtributos());


//========================================================================================

class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this._nombre = nuevoNombre;
    } else {
      console.log("El nombre no puede estar vacío");
    }
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad >= 0 && !isNaN(nuevaEdad)) {
      this._edad = nuevaEdad;
    } else {
      console.log("La edad no puede ser negativa");
    }
  }

  mostrarAtributos() {
    return `Nombre: ${this._nombre}\nEdad: ${this._edad}`;
  }
}

let persona9 = new Persona("Marcos", 19);

console.log(persona9.nombre);//get

persona9.nombre = "Jose";//set
console.log(persona9.mostrarAtributos()); 

persona9.edad = -5;//set erroneo
persona9.edad = "Hola"//set erroneo

//========================================================================================

class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this._nombre = nuevoNombre;
    } else {
      console.log("El nombre no puede estar vacío");
    }
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad >= 0 && !isNaN(nuevaEdad)) {
      this._edad = nuevaEdad;
    } else {
      console.log("La edad no puede ser negativa");
    }
  }

  mostrarAtributos() {
    return `Nombre: ${this._nombre}\nEdad: ${this._edad}`;
  }
}

class Alumno extends Persona{

    mostrarAtributos(){
        return "Metodo sobrescrito"
    }

}

let persona10 = new Persona("Marcos", 19);
let alumno1 = new Alumno("Manuel",20);

console.log(persona10.mostrarAtributos());
console.log(alumno1.mostrarAtributos());