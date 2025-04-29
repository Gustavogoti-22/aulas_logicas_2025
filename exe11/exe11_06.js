const prompt = require('prompt-sync')()
let altura = Number(prompt(`Digite sua altura: `))
let peso = Number(prompt(`Digite sua peso: `))
let imc = peso / (altura ** 2)
console.log(imc)
if (imc < 18.5){
    console.log(`Abaixo do peso ideal`)
}else if (imc >= 18.8 && imc < 25){
    console.log(`Peso ideal`)
}else if (imc >= 25 && imc < 30){
    console.log(`Sobrepeso`)
}else{
    console.log(`Obesidade`)
}
