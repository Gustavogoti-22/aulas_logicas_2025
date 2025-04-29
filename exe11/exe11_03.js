const prompt = require('prompt-sync')()
let n1 = Number(prompt(`Digite um numero: `))
let n2 = Number(prompt(`Digite um numero: `))
console.log(`A divisão desses numeros é: ${n1/n2.toFixed(2)}`)