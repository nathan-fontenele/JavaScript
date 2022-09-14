function calculaIMC(){
    var result = document.getElementById("resultado");
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    var imc = peso / (altura * altura);
    result.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;

    if(imc < 18.5){
        result.innerHTML += " - Abaixo do peso";
    }else if(imc >= 18.5 && imc < 25){
        result.innerHTML += " - Peso normal";
    }else if(imc >= 25 && imc < 30){    
        result.innerHTML += " - Sobrepeso";
    }else if(imc >= 30 && imc < 35){
        result.innerHTML += " - Obesidade grau 1";
    }else if(imc >= 35 && imc < 40){
        result.innerHTML += " - Obesidade grau 2";
    }else if(imc >= 40){
        result.innerHTML += " - Obesidade grau 3";
    }
}
