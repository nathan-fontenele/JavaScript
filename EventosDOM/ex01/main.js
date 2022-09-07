//método tradicional
/*
function clicar(){
    var caixa = document.getElementById("box");
    caixa.style.backgroundColor = "#29221f";
    caixa.style.color = "#fcf7c5";
    caixa.innerHTML = "Clicou";
}

function entrar(){
    var caixa = document.getElementById("box");
    caixa.style.backgroundColor = "#13747d";
    caixa.innerHTML = "Entrou";
}

function sair(){
    var caixa = document.getElementById("box");
    caixa.style.backgroundColor = "#fcf7c5";
    caixa.style.color = "#29221f";
    caixa.innerHTML = "Saiu";
}
*/

//usando Event Listener
var caixa = document.getElementById("box");
caixa.addEventListener("click", clicar);
caixa.addEventListener("mouseenter", entrar);
caixa.addEventListener("mouseout", sair);

function clicar(){
    caixa.style.backgroundColor = "#29221f";
    caixa.style.color = "#fcf7c5";
    caixa.innerHTML = "Clicou";
}

function entrar(){
    caixa.style.backgroundColor = "#13747d";
    caixa.innerHTML = "Entrou";
}

function sair(){
    caixa.style.backgroundColor = "#fcf7c5";
    caixa.style.color = "#29221f";
    caixa.innerHTML = "Saiu";
}