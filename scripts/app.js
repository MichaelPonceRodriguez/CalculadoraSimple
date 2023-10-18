const formato = document.getElementById('formato');
    let numero1 = formato['operacion1'];
    let numero2 = formato['operacion2'];
    let resultado;

function sumar(){
    resultado = parseInt(numero1.value) + parseInt(numero2.value);
    if(isNaN(resultado)) document.getElementById('resultado').innerHTML = 'Resultado: Debe contener numeros validos' ;
    else document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}

function restar(){
    resultado = parseInt(numero1.value) - parseInt(numero2.value);
    if(isNaN(resultado)) document.getElementById('resultado').innerHTML = 'Resultado: Debe contener numeros validos' ;
    else document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}
function dividir(){
    resultado = parseInt(numero1.value) / parseInt(numero2.value);
    if(isNaN(resultado)) document.getElementById('resultado').innerHTML = 'Resultado: Debe contener numeros validos' ;
    else document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}
function multiplicar(){
    resultado = parseInt(numero1.value) * parseInt(numero2.value);
    if(isNaN(resultado)) document.getElementById('resultado').innerHTML = 'Resultado: Debe contener numeros validos' ;
    else document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}