const prompt = require('prompt-sync')();
// Ex01_09.js - Desconto de 5% em um produto
let preco = Number(prompt(`Digite o preço do produto: `))
//let desconto = preco * 5 / 100
// ou 0.05
let precoComDesconto = preco - preco * 0.05
console.log(`Preço sem desconto ${preco.toFixed(2)}`)
console.log(`Preço com desconto ${precoComDesconto.toFixed(2)}`)
