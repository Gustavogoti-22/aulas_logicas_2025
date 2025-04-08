const prompt = require('prompt-sync')();
let numero = parseInt(prompt(`Qual o número?`))
if(numero >= 0)
    console.log(`O ${numero} é positivo`)
else (numero < 0)
console.log(`O ${numero} é negativo`)