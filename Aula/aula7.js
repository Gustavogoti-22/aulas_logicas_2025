const prompt = require('prompt-sync')();
let a = 2
let b = 3
console.log(a == b)
console.log(a != b)
console.log(a > b)
console.log(a >= b)
console.log(a < b)
console.log(a <= b)

// Estruturas condicionais
let tenhoIngresso = true
if(tenhoIngresso == true){
    console.log(`posso entrar!`)
}
let idade = Number(prompt(`Qual a sua idade? `))
if(idade >= 18){
    console.log(`Maior idade`)
}
if(idade <= 18){
    console.log(`Menor de idade`)
}
tenhoIngresso = false
if(tenhoIngresso == true){
    console.log(`posso entrar!`)
}else{
    console.log(`Estou barrado no baile`)
}
idade = Number(prompt(`Digite a idade: `))
if(idade >= 18){
    console.log(`vc é maior de idade`)
}else{
    console.log(`vc é menor de idade`)
}