var capturaVelocidade = document.getElementById('velocidade');

var botao = document.getElementById('submit');

var result = document.querySelector('div#resultado');

botao.addEventListener('click', verificar);

function verificar() {
    if(capturaVelocidade.value > 60) {
        result.innerHTML = `Sua velocidade atual é de ${capturaVelocidade.value}km/h.`;

        result.innerHTML += `<br>Você foi <strong>multado</strong> por excesso de velocidade.`;
    } else{
        result.innerHTML = `Sua velocidade atual é de ${capturaVelocidade.value}Km/h`};

        result.innerHTML += `<br>Você está dentro do limite de velocidade. <strong>Dirija com segurança!</strong>`;
}