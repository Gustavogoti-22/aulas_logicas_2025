const prompt = require('prompt-sync')();
// Ex01_07.js - Conversão de dinheiro para dólares
let reais = parseFloat(prompt(`Digite o valor em real: `))
let cotacao = parseFloat(prompt(`Digite a cotação do dolar:`))
let dolares = reais / cotacao
console.log(`Tenho R$${reais} na minha carteira à $${dolares.toFixed(2)} `)