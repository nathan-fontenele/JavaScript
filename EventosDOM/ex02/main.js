function somar(){
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;
    var res = document.getElementById("resultado");
    var soma = parseInt(n1) + parseInt(n2);
    res.innerHTML = `A soma de ${n1} + ${n2} é <strong>${soma}</strong>`;
}