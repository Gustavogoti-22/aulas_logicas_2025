const prompt = require('prompt-sync')();
let n = Number(prompt(`Digite um numero entre 1 a 7: `))
switch(true){
    case n >= 7:
        console.log(`Sabado`)
        break
    case n >= 6:
        console.log(`Sexta`)
        break
    case n >= 5:
        console.log(`Quinta`)
        break
    case n >= 4:
        console.log(`Quarta`)
        break
    case n >= 3:
        console.log(`Terça`)
        break
    case n >= 2:
        console.log(`Segunda`)
        break
    case n >= 1:
        console.log(`Domingo`)
        break
}


let nu = parseInt(prompt(`Digite um numero de 1 a 7: `))
let diaS
switch(nu){
    case 1:
        diaS = `Domingo`
        break
    case 2:
        diaS = `Segunda`
        break
    case 3:
        diaS = `Terça`
        break
    case 4:
        diaS = `Quarta`
        break
    case 5:
        diaS = `Quinta`
        break
    case 6:
        diaS = `Sexta`
        break
    case 7:
        diaS = `Sabado`
        break
}