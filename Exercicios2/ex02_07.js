const prompt = require('prompt-sync')();
let numero = Number(prompt(`Qual a velocidade?`))
let numero2 = numero - 80
if (numero > 80)
    console.log(`Você vai ser multado por passar de 80kmph e devera pagar =R$${numero2 * 7}`)
