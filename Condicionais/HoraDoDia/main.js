var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();
var exibeHora = document.querySelector('div#hora')
var exibeImg =document.querySelector('div#img')

function display(hora, minutos){
    exibeHora.innerHTML = `Agora são ${hora}:${minutos} horas.`
    
    if (hora < 12){
        exibeImg.innerHTML = `<img src="assets/pic1.jpg" alt="manha">`
        document.body.style.background = '#fc354c'
    } else if(hora<18){
        exibeImg.innerHTML = `<img src="assets/pic2.jpg" alt="tarde">`
        document.body.style.background = '#13747d'
    } else{
        exibeImg.innerHTML = `<img src="assets/pic3.jpg" alt="noite">`
        document.body.style.background = '#29221f'
        exibeHora.style.color = '#000'
        document.body.style.color = '#fff'
    }
    
}

display(hora, minutos)