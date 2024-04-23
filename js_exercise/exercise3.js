class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = parseInt(edad); // Asegúrate de manejar NaN en la aplicación real
  }

  imprimirDatos() {
    document.write(`<br><br>La persona ${this.nombre} tiene una edad de ${this.edad}<br>`);
  }
}

class Empresa {
  constructor(edadTope) {
    this.edadTope = edadTope;
  }

  esInhabilitada(persona) {
    let inhabilitada = persona.edad > this.edadTope; 
    return inhabilitada;
  }

  contar(personas) {
    let filtro = personas.filter(persona => this.esInhabilitada(persona)).length; 
    return filtro;
  }
}

let personas = [];

function Datos() {
  for (let i = 1; i <= 3; i++) {
    let nombre = prompt(`Por favor ingresa el nombre de la persona ${i}:`);
    let edad = parseInt(prompt(`Por favor ingresa la edad de la persona ${i}:`));
    let persona = new Persona(nombre, edad);
    personas.push(persona);
    persona.imprimirDatos();
  }
}

function Programa() {
  Datos(); 

  const empresa = new Empresa(60); 
  const cantidadInhabilitados = empresa.contar(personas); 
  
  document.write(`<p>Número de personas inhabilitadas para trabajar en la empresa: ${cantidadInhabilitados}</p>`);
}

Programa(); // Ejecuta el programa
