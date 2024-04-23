let po = {
  teclas: document.querySelectorAll(".calculadora_list li"), // Corrección en la selección de elementos
  action: null,
};

let fun = {
  inicio: function () {
    for (let i = 0; i < po.teclas.length; i++) {
      // Corrección en el bucle
      po.teclas[i].addEventListener("click", fun.oprimirTeclas);
    }
  },
  oprimirTeclas: function (tecla) {
    po.action = tecla.target.getAttribute("class"); // Corrección en la obtención de la clase
    fun.calculadora(po.action);
  },
  calculadora: function (action) {
    switch (action) {
      case "numero":
        console.log("numero");
        break;
      case "simbolo":
        console.log("simbolo");
        break;
      case "raiz":
        console.log("raiz");
        break;
      case "decimal":
        console.log("decimal");
        break;
      case "cos":
        console.log("cos");
        break;
      case "pi":
        console.log("pi");
        break;
      case "cubo":
        console.log("cubo");
        break;
      case "igual":
        console.log("igual");
        break;
    }
  },
};

fun.inicio();

function hola(){
    
}