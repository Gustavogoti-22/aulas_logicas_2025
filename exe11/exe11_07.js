const prompt = require('prompt-sync')()
let salarioPh = Number(prompt(`Digite quanto você ganha por hora: `))
let horasPM = Number(prompt(`Digite quantas horas você trabalha por mês: `))
let salarioB = (salarioPh * horasPM)
console.log(`Seu salario bruto é: R$${salarioB}`)
let IR = (salarioB * 0.11) 
console.log(`Desconto de imposto de renda: R$${IR}`)
let inss = (salarioB * 0.08)
console.log(`Desconto do INSS: R$${inss}`)
let sindicato = (salarioB * 0.05)
console.log(`Desconto do sindicato: R$${sindicato}`)
let salarioL = (salarioB - IR - inss - sindicato)
console.log(`Seu salario liquido: R$${salarioL}`)
