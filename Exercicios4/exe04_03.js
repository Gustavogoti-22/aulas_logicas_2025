const prompt = require('prompt-sync')();
let n = Number(prompt(`Digite um numero: `))
switch (true){
    case n >= 12:
        console.log(`Dezembro`)
        break
    case n >= 11:
        console.log(`Novembro`)
        break
    case n >= 10:
        console.log(`Outubro`)
        break
    case n >= 9:
        console.log(`Setembro`)
        break
    case n >= 8:
        console.log(`Agosto`)
        break
    case n >= 7:
        console.log(`Julho`)
        break
    case n >= 6:
        console.log(`Junho`)
        break
    case n >= 5:
        console.log(`Maio`)
        break
    case n >= 4:
        console.log(`Abril`)
        break
    case n >= 3:
        console.log(`Março`)
        break
    case n >= 2:
        console.log(`Fevereiro`)
        break
    case n >= 1:
        console.log(`Janeiro`)
        break
}