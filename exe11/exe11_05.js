const prompt = require('prompt-sync')()
let sexo = prompt(`Digite o seu sexo(M ou F): `)
if(sexo == `M`){
    console.log(`Seu sexo é Maculino`)
}else if(sexo == `F`){
    console.log(`Seu sexo é Feminino`)}
else(console.log(`Sexo invalido`))
