const prompt = require('prompt-sync')();
let numero = Number(prompt(`Qual o 1° numero? `))
let numero2 = Number(prompt(`Qual o 2° numero? `))
if(numero > numero2)
    console.log(`o ${numero} é maior`)
else(numero < numero2)
    console.log(`o ${numero2} é maior`)

