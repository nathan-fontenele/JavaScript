let amigo = {nome:'josé', 
sexo:'M', 
peso:84, 
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
