function validarFormulario(){

    let usuario = validar_usuario();
    let correo = validar_correo();
    let contrasena = validar_contrasena();

    if(usuario && correo && contrasena){
        alert("Registro exitoso");
        return true;
    }else{
        alert("Varificar campos");
        return false;
    }
}

function validar_usuario(){

    let usuario = document.getElementById('usuario').value;
    let expresion = /^.{2,12}$/;

    if(usuario.trim() == ''){
        alert("Por favor ingresar un usuario")
        return false;
    }else if(!expresion.test(usuario)){
        alert("Ingresa un usuario entre 2 y 12 caracteres");
        return false;
    }

    return true;
}
function validar_contrasena(){

    let contrasena = document.getElementById("contrasena").value;

    let expresion = /^(?=.*\d).{4,8}$/;

    if(contrasena.trim() == ''){
        alert("Por favor ingresar una contraseña")
        return false;

    }else if(!expresion.test(contrasena)){
        alert("Ingresa una contraseña entre 4 y 8 caracteres con almenos un digito");
        return false;
    }

    return true;

}

function formatoEmail(email) {
    let re = /^[a-zA-Z]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,3}$/;
    return re.test(email);
  }
  
function validar_correo(){

    let email = document.getElementById("email").value;

    if (email.trim() == "") {
        alert("Por favor ingresar un email");
        return false;
      } else if (!formatoEmail(email)) {
        alert("Ingrese un correo electrónico valido");
        return false;
      }
    
      return true;

}
