'use strict'

function calculadora(){
  let n1 =  parseFloat(document.getElementById('n1').value);
  let n2 =   parseFloat(document.getElementById('n2').value);
  let operaciones = document.getElementById('operaciones').value;

    if(operaciones === '+'){
        let sumar = document.getElementById('resultado').value = n1 + n2;
    }
    if(operaciones === '-'){
        let restar = document.getElementById('resultado').value = n1 - n2;
    }

    if(operaciones === '/'){
        let dividir = document.getElementById('resultado').value = n1 / n2;
    }

    if(operaciones === '*'){
        let multiplicar = document.getElementById('resultado').value = n1 * n2;
    }

}