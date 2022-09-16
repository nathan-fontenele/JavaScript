var numero = document.getElementById('numero')

var resultado = document.getElementById('resultado')

var btn = document.getElementById('btn')

btn.addEventListener('click', multiplicar);

function multiplicar(){
    var n = Number(numero.value)

    if(n == ' '){
        alert('Impossível, digite um valor!')
    }else{
        for(c=1; c<=10; c++){
            produto = c*n
            resultado.innerHTML += `${n} x ${c} = ${produto} <br>`
        }
    }
}