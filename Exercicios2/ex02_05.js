const prompt = require('prompt-sync')();
let numero = Number(prompt(`Qual a sua idade?`))
if(numero >= 18)
    console.log(`Você é maior de idade`)
else console.log(`Você é menor de idade`)