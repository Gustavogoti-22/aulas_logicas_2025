const prompt = require(`prompt-sync`)()
let inicio = Number(prompt(`Digite o valor do inicio: `))
let fim = Number(prompt(`Digite o valor do fim: `))
let passo = Number(prompt(`Digite o valor do passo: `))
for(inicio; inicio < fim; inicio+=passo){
    console.log(`Valor inicial: ${inicio}`)
    console.log(`Valor passo: ${passo}`)
    console.log(`Valor fim: ${fim}`)
    console.log(`;)==========================(^人^)`);
}