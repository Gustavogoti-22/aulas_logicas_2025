const prompt = require('prompt-sync')()
let nota = Number(prompt("Insira sua Nota:"))
let nota2 = Number(prompt("Digite a próxima nota:"))
let media = (nota + nota2) / 2
console.log(`A sua média é ${media}`)