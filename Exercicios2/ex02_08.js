const prompt = require('prompt-sync')();
let vendas = Number(prompt(`Quanto você vendeu?`))
if (vendas > 5000){
    let comissao = vendas * 0.05
    console.log(`Você vai ganhar R$${comissao} de comissão.`)
}else{
    let comissao = vendas * 0.03
    console.log(`Você vai ganhar R$${comissao} de comissão.`)
}