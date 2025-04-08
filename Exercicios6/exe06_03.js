const prompt = require("prompt-sync")();
somaP = 0
somaI = 0
qtdP = 0
qtdI = 0
for(let i = 0; i <= 5; i++){
    entrada = Number(prompt(`Digite um numero: `))
    if(entrada % 2 == 0){
        somaP += entrada
        qtdP++
    }else{
        somaI += entrada
        qtdI++
    }
}
console.log(`A soma de ${qtdP} é ${somaP}`);
console.log(`A soma de ${qtdI} é ${somaI}`);