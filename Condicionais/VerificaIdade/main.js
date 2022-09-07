function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var anoNasc = document.getElementById("anoNasc");
    var res = document.querySelector('#resultado');

    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if(anoNasc.value.length == 0 || anoNasc.value > ano){
        window.alert("Verifique os dados e tente novamente!");
    } else{
        var sexo = document.getElementsByName("sexo");
        var idade = ano - Number(anoNasc.value);
        var genero = "";

        if (sexo[0].checked){
            genero = "Feminino";
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'assets/crianca-mulher.jpg');
            } else if(idade < 21){
                img.setAttribute('src', 'assets/adolescente-mulher.jpg');
            } else if(idade <50){
                img.setAttribute('src', 'assets/adulto-mulher.jpg');
            }else{
                img.setAttribute('src', 'assets/idosa-mulher.jpg');
            }
        } else if(sexo[1].checked){
            genero = "Masculino";
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'assets/crianca-homem.jpg');
            } else if(idade < 21){
                img.setAttribute('src', 'assets/adolescente-homem.jpg');
            } else if(idade <50){
                img.setAttribute('src', 'assets/adulto-homem.jpg');
            }else{
                img.setAttribute('src', 'assets/idoso-homem.jpg');
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos genero ${genero} com idade calculada: ${idade} <br>`;
        res.appendChild(img).style.clipPath = 'circle(50%)' //adiciona aimagem abaixo do resultado

    }
}