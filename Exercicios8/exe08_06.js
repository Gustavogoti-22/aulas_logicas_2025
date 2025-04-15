const prompt = require('prompt-sync')();
let palavra = prompt("Digite uma palavra:");
let vogais = "aeiouAEIOU";
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
        contador++;
    }
}

console.log("A palavra tem " + contador + " vogais.");