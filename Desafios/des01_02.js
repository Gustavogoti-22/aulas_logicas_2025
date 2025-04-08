const prompt = require('prompt-sync')()
let hora = Number(prompt(`Qual o horario de 0 até 23: `))
if (hora >= 5 && hora <= 11){
    console.log(`Bom Dia!`)
}else if (hora >= 12 && hora <= 17){
    console.log(`Boa Tarde!`)
}else if (hora >= 18 && hora <= 23){
    console.log(`Boa Noite!`)
}else if (hora >= 0 && hora <= 4){
    console.log(`Boa Madrugada!`)
}