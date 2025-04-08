const prompt = require('prompt-sync')();
let nota = parseInt(prompt(`Qual a sua 1° nota? `))
let nota2 = parseInt(prompt(`Qual a 2° nota? `))
let media = nota + nota2 / 2
if(media >= 7){
    console.log(`aprovado`)
}else{
    console.log(`reprovado`)
}