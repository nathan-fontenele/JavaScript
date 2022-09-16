function multiplicar(){
    let number = document.getElementById('numero')
    let btn = document.getElementById('btn')
    let res = document.getElementById('tabuada')
    
    if(number.value.length == 0){
        alert('Por favor, insira um número')
    } else{
        let n = Number(number.value)
        let c = 1
        res.innerHTML= ' '
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }
}

