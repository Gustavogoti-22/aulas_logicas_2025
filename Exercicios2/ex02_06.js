const prompt = require('prompt-sync')();
let numero = Number(prompt(`Qual primeiro numero?`))
let numero2 = Number(prompt(`Qual o segundo numero?`))
if(numero == numero2)
    console.log(`os numeros são iguais`)
else console.log(`não são iguais`)