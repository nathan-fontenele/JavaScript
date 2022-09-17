let valores = [1, 6, 3, 6, 8, 2, 7, 12, 64, 32]

//percorrendo vetores
for(let c=0; c<valores.length; c++){
    console.log(`A posição ${c} recebe o valor ${valores[c]}`)
}

//ou

for(let c in valores){
    console.log(`A posição ${c} recebe o valor ${valores[c]}`)
}

//buscando valores
console.log(valores.indexOf(7))//procura o valor 7 e mostra a posição