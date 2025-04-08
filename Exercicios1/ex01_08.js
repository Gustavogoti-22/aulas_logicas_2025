const prompt = require('prompt-sync')();
// Ex01_08.js - Cálculo de tinta para pintar uma parede
let altura = Number(prompt(`Digite a altura: `))
let largura = Number(prompt(`Digite a largura: `))
let area = largura * altura
let tintaNecessaria = area / 2
console.log(`Area ${area}`)
console.log(`Tinta necessaria ${tintaNecessaria.toFixed(2)} litros de tinta`)