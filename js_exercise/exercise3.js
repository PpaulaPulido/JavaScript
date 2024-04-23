class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  imprimirDatos() {
    document.write(`\nLa persona ${this.nombre} tienes una edad de ${this.edad}\n`);
  }
}

class Empresa{

  constructor(edad){
    this.edad = edad;
  }

  edadTope(){
    
  }

}
function Datos() {
  let nombre = prompt(`Por favor ingresa el nombre de la persona 1: `);
  let edad = parseInt(prompt(`Por favor ingresa la edad de la persona 1: `));
  const Persona1 = new Persona(nombre, edad);
  Persona1.imprimirDatos();

  nombre = prompt(`Por favor ingresa el nombre de la persona 2: `);
  edad = parseInt(prompt(`Por favor ingresa la edad de la persona 2: `));
  const Persona2 = new Persona(nombre, edad);
  Persona2.imprimirDatos();

  nombre = prompt(`Por favor ingresa el nombre de la persona 3: `);
  edad = parseInt(prompt(`Por favor ingresa la edad de la persona 3: `));
  const Persona3 = new Persona(nombre, edad);
  Persona3.imprimirDatos();
}
Datos();
