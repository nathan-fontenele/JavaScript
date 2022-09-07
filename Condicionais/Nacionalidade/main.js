var capNac = document.querySelector('input#nacionalidade');

var botao = document.querySelector('input#enviaNacionalidade');

var result = document.querySelector('div#resultado');

botao.addEventListener('click', verificar);

function verificar() {
    if(capNac.value == 'Brasil' || capNac.value == 'brasil') {
        result.innerHTML = `Você é <strong>Brasileiro</strong>!`;
    } else{
        result.innerHTML = `Você é <strong>Estrangeiro</strong>!`;
    }
}