const prompt = require('prompt-sync')();
let idade = Number(prompt(`Digite sua idade: `))
if (idade >= 18 && idade <= 70){
    console.log(`Voto obrigatório`)
}else{
    if(idade < 16){
        console.log(`Você n pode votar`)
    }else{
        if(idade >= 16 || idade >70){
            console.log(`Voto facultativo`)
        }
    }
}



// switch case estrutura de controle de fluxo para tomar decisoes com base no valor variavel
let n1 = Number(prompt(`Digite o primeiro numero: `))
let n2 = Number(prompt(`Digite o segundo numero: `))
let op = prompt(`Escolha a operação (+, -, *, /, **)`)
switch (`+`) {
    case value:`+`
        console.log(`resultado: ${n1 + n2}`)
        break;
    case value:`-`
        console.log(`resultado: ${n1 - n2}`)
        break;
    case value:`*`
        console.log(`resultado: ${n1 * n2}`)
        break;
    case value:`/`
        console.log(`resultado: ${n1 / n2}`)
        break;
    case value:`**`
        console.log(`resultado: ${n1 ** n2}`)
        break;
}






// verificar qual letra é igual
let letra = prompt(`Digite uma letra: `).toUpperCase()
// quando usamos switch variavel, o switch compara exatamente o val da variavel
// com os cases definitivos
switch(letra){
    case "A":
    case "E":
    case "I":
    case "O":
        console.log('Vogal')
        break;
    default:
        console.log('Consoante')

}

// converter a nota em numero para letra
let nota = parseInt(`Digite a nota do aluno: `)
// o switch true, verifica quais expressões dentro do case retomam true(verdadeiro)
// ou seja comparamos as expressões booleana
switch(true){
    
    case nota >= 90:
        console.log(`Nota A`)
        break;
    case nota >= 80:
        console.log(`Nota B`)
        break
    case nota >= 70:
        console.log(`Nota C`) 
        break
    case nota >= 60:
        console.log(`Nota D`)
        break
    default:
        console.log(`Nota E`)
}