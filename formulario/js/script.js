function validarFormulario() {
  let nombreValido = validarNombre();
  let apellidoValido = validarApellido();
  let emailValido = validarEmail();
  let userValido = validarUser();
  let contrValido = validarContrasena();

  if (
    nombreValido &&
    apellidoValido &&
    emailValido &&
    userValido &&
    contrValido
  ) {
    alert("Registro exitoso");
    return true;
  } else {
    alert("Verificar campos");
    return false;
  }
}

function validarNombre() {
  let nombre = document.getElementById("nombre").value;
  if (nombre.trim() == "") {
    alert("Por favor ingresar el nombre");
    return false;
  }
  return true;
}
function validarApellido() {
  let apellido = document.getElementById("apellido").value;
  if (apellido.trim() == "") {
    alert("Por favor ingresar el apellido");
    return false;
  }
  return true;
}

function validarEmail() {
  let email = document.getElementById("email").value;

  if (email.trim() == "") {
    alert("Por vaor ingresar el email");
    return false;
  } else if (!formatoEmail(email)) {
    alert("Ingrese un correo electrónico valido");
    return false;
  }

  return true;
}
function validarUser() {
  let user = document.getElementById("usuario").value;
  if (user.trim() == "") {
    alert("Por favor ingresar el usuario");
    return false;
  }
  return true;
}
function validarContrasena() {
  let contrasena = document.getElementById("contrasena").value;
  let expresion = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (contrasena.trim() == "") {
    alert("Por favor ingresar contraseña");
    return false;
  }else if(!expresion.test(contrasena)){
    alert("Por favor ingresar una contraseña valida");
    return false;
  }
  return true;
  /*let conNumero = /\d/.test(contrasena);
    let conMayuscula = /[A-Z]/.test(contrasena);
    let conMinuscula = /[a-z]/.test(contrasena);

    if(contrasena.trim() == ''){
        alert("Por favor ingresar contraseña");
        return false
    }else if(contrasena.length < 9){
        alert("La contraseña debe tener minimo 8 caracteres");
        return false;
    }else if(!conNumero){
        alert("La contraseña debe contener por lo menos un número");
        return false;
    }else if(!conMayuscula){
        alert("La contraseña debe contener una mayuscula");
        return false;
    }else if(!conMinuscula){
        alert("La contraseña debe tener minusculas");
        return false;
    }
    return true;*/
}
function formatoEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
