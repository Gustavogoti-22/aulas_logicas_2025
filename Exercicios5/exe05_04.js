const prompt = require(`prompt-sync`)()
let i = 0
let entrada
let maior = 0
let menor = Infinity
let soma = 0
while(i <= 10){
    entrada = Number(prompt(`Digite um numero: `))
    if(entrada > maior){
    maior = entrada    
    }
    if(entrada < maior){
        menor = entrada
    }
    soma += entrada
    i++
}
let media = soma / 10
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);
console.log(`Media: ${media.toFixed(2)}`);
