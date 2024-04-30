let po = {
  teclas: document.querySelectorAll(".calculadora_list li"),
  accion: null,
  digito: null,
  operaciones: document.querySelector("#operaciones"),
  cantisig: 0,
  cantidadDeci: false,
  resultado: false,
};

let fun = {
  inicio: function () {
    for (let i = 0; i < po.teclas.length; i++) {
      po.teclas[i].addEventListener("click", fun.oprimirTeclas);
    }
  },
  oprimirTeclas: function (tecla) {
    po.accion = tecla.target.getAttribute("class");
    po.digito = tecla.target.innerHTML;
    fun.calculadora(po.accion, po.digito);
  },
  calculadora: function (accion, digito) {
    switch (accion) {
      case "numero":
        po.cantisig = 0;
        if (po.operaciones.innerHTML == "0") {
          po.operaciones.innerHTML = digito;
        } else {
          if (po.resultado) {
            po.resultado = false;
            po.operaciones.innerHTML = digito;
          } else {
            po.operaciones.innerHTML += digito;
          }
        }
        break;

      case "simbolo":
        po.cantisig++;
        if (po.cantisig === 1) {
          if (po.operaciones.innerHTML == "0") {
            po.operaciones.innerHTML = 0;
          } else {
            po.operaciones.innerHTML += digito;
            po.cantidadDeci = false;
            po.resultado = false;
          }
        }
        console.log("simbolo");
        break;

      case "raiz":
        po.operaciones.innerHTML = Math.sqrt(po.operaciones.innerHTML);
        po.resultado = true;
        console.log("raiz");
        break;

      case "decimal":
        if (!po.cantidadDeci && po.cantisig != 1) {
          po.operaciones.innerHTML += digito;
          po.cantidadDeci = true;
          po.resultado = false;
        }
        console.log("decimal");
        break;

      case "eliminarDigito":
        if (po.operaciones.innerHTML.length <= 1) {
          po.operaciones.innerHTML = "0";
        } else {
          po.operaciones.innerHTML = po.operaciones.innerHTML.slice(0, -1);
        }
        po.resultado = false;
        break;
      case "pi":
        po.operaciones.innerHTML = po.operaciones.innerHTML * Math.PI;
        po.resultado = true;
        console.log("pi");
        break;
      case "cubo":
        po.operaciones.innerHTML = Math.pow(po.operaciones.innerHTML, 3);
        po.resultado = true;
        console.log("cubo");
        break;

      case "igual":
        po.operaciones.innerHTML = eval(po.operaciones.innerHTML);
        po.resultado = true;
        console.log("igual");
        break;
    }
  },

  borrarCalculadora: function () {
    po.resultado = false;
    po.operaciones.innerHTML = 0;
  },
};

fun.inicio();
