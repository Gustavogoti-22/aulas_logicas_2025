const prompt = require('prompt-sync')();
let m = prompt(`Digite o nome do mês: `)
switch (true){
    case m == (`Janeiro`):
        console.log(`31`)
        break
    case m == (`Fevereiro`):
        console.log(`28`)
        break
    case m == (`Março`):
        console.log(`31`)
        break
    case m == (`Abril`):
        console.log(`30`)
        break
    case m == (`Maio`):
        console.log(`31`)
        break
    case m == (`Junho`):
        console.log(`30`)
        break
    case m == (`julho`):
        console.log(`31`)
        break
    case m == (`agosto`):
        console.log(`31`)
        break
    case m == (`setembro`):
        console.log(`30`)
        break
    case m == (`Outubro`):
        console.log(`31`)
        break
    case m == (`Novembro`):
        console.log(`30`)
        break
    case m == (`Dezembro`):
        console.log(`31`)
        break
}



let mes = prompt(`Digite o nome do mês: `).toLocaleLowerCase
switch(mes){
    case `janeiro`:
    case `fevereiro`:
    case `março`:
    case `maio`:
    case `julho`:
    case `outubro`:
    case `dezembro`:
        console.log(`${mes} tem 31 dias`)
        break
    case `abril`:
    case `junho`:
    case `setembro`:
    case `novembro`:
        console.log(`${mes} tem 30 dias`)
        break
    case `fevereiro`:
        console.log(`${mes} tem 29 dias`)
        break
    default:
        console.log(`Mês invalido`)
}