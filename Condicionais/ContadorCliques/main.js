function contador(){
    const res = document.getElementById('result')
    const adicionar = document.getElementById('adicionar')
    const subtrair = document.getElementById('remove')
    const resetar = document.getElementById('reset')

    let contador = 0;
    res.innerHTML = contador;

    adicionar.addEventListener('click', function(){
        contador++;
        res.innerHTML = contador;
    })

    subtrair.addEventListener('click', function(){
        contador--;
        res.innerHTML = contador;
    })

    resetar.addEventListener('click', function(){
        contador = 0;
        res.innerHTML = contador;
    })
}    