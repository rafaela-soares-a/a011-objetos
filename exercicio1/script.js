
// Crie um array vazio chamado sacolao, e siga os passos abaixo:

const sacolao=[]

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:

const fruta1 ={nome: "pera",
precoDaPera: 0.35,
temPera: true
}

const fruta2 = {
    nome: "melancia",
precoDaMelancia: 5.99,
temMelancia: false
} 

const fruta3 = {nome: "morango",
precoDoMorango: 7.99,
temMorango: true}


// b) Adicione os objetos ao array sacolao utilizando o método push()

sacolao.push(fruta1, fruta2, fruta3)

console.log("itens sacolão" , sacolao)  