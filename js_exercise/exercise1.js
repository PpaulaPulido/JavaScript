function palabra(){

    let palabra = prompt("Por favor ingresar una de las desiguientes palabra: \n 1.Casa \n2.Mesa \n3.perro \n4.Gato");
    
    palabra = palabra.toLowerCase();

    if(palabra == 'perro'){
        alert("translation is dog");
    }else if(palabra == 'casa'){
        alert("translation is house");
    }else if(palabra == 'mesa'){
        alert("translation is table");
    }else if(palabra == 'gato'){
        alert("translation is cat");
    }else{
        alert('Palabra incorrecta');
    }
}


//palabra();

function cuatrimestre(){

    const fechaActual = new Date();
    let mesActual = fechaActual.getMonth()+1;
    console.log(mesActual)

    if(mesActual >= 0 && mesActual <= 3){
        document.write(`Te encuentras en el primer trimestre, estas en el mes ${mesActual}`);
    }else if(mesActual >= 4 && mesActual <= 6){
        document.write(`Te encuentras en el segundo trimestre, estas en el mes ${mesActual}`);
    }else if(mesActual >= 7 && mesActual <= 9){
        document.write(`Te encuentras en el tercer trimestre, estas en el mes ${mesActual}`);
    }else if(mesActual >= 10 && mesActual <= 12){
        document.write(`Te encuentras en el cuatro trimestre, estas en el mes ${mesActual}`);
    }else{
        document.write(`Mes fuera del rang0`);
    }

}

cuatrimestre();

