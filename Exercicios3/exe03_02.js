const prompt = require('prompt-sync')()
let anoatual= Number(prompt('ano atual: '))
let anonascimento = Number(prompt('ano de nascimento: '))

let idade = (anoatual - anonascimento)

if(idade <= 10){
    console.log('crianca')
    }
    else if(idade > 11 && idade <= 17){
        console.log('adolecente')
        }
        else if(idade > 18 && idade <= 59){
            console.log('adulto')
            }
            else if(idade >= 60){
                console.log('veio')
                }
