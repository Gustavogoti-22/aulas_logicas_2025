const prompt = require('prompt-sync')();
let n1 = Number(prompt(`Digite a primeira nota: `))
let n2 = Number(prompt(`Digite a segunta nota: `))
let media = (n1 + n2) / 2
switch(true){
    case media >= 7:
        console.log(`Vc foi aprovado`)
        break
    case media >= 5 && media < 7:
        console.log(`Vc ta de recuperação`)
        break
    case media < 5:
        console.log(`Vc foi reprovado`)
        break
}
