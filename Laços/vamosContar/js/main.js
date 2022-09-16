var inicio = document.getElementById('inicio');
var fim = document.getElementById('fim');
var passo = document.getElementById('passo');
var result = document.getElementById('resultado');
var btnContar = document.getElementById('btn');

btnContar.addEventListener('click', contar);

function contar(){
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value)
    result.innerHTML = ' '
    if(i==0 && f==0){
        result.innerHTML = 'Imposível contar'
    }else if(p<=0){
        alert('Passo imválido considerando passo 1')

        if(i<f){
            for(c=i; c<=f; c++){
                result.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(c=i; c>=f; c--){
                result.innerHTML += `${c} \u{1F449}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }else{
        if(i<f){
            for(c=i; c<=f; c+=p){
                result.innerHTML += `${c} \u{1F449}`;
            }
        }else{
            for(c=i; c>=f; c-=p){
                result.innerHTML += `${c} \u{1F449}`;
            }
        }
        result.innerHTML += `\u{1F3C1}`;
    }
}