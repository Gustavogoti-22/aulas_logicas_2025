//importando a biblioteca para entrada de dados
const prompt = require('prompt-sync')();


//variaveis e constantes
// #passo 1: receber o nome da pessoa
let nome = 'carlinhos'
// #passo 2: receber a idade da pessoa
let idade = 18
// #passo 3: receber o peso da pesso
let peso = 70.7
// #passo 4: exibir o nome, a idade e o peso
console.log(nome, idade, peso)

let curso = "desenvolvimento de sistema"
console.log('curso')
console.log(curso)
console.log('curso', curso)

let idade2 = 35
let temperatura = 23.5
let nome2 = 'rei mago'
console.log('Olá', nome2, 'você tem:', idade2, 'e hoje está fazendo:', temperatura,'ºC')
console.log(`olá ${nome},voeê tem ${idade2}, e hoje está fazendo: ${temperatura},°C`)

let chovendo = false
let dia = true
//as constantes não podem ser reatribuidos novos valores
const PI = 3.1415
console.log(PI)
//utilizando prompt para receber dados
//entrada de dados

//no prompt sempre recebemos uma string
nome = prompt('qual é seu nome?')
idade = parseInt(prompt(`qual sua idade?`))
peso = parseFloat(prompt(`Qual seu peso?`))
console.log(`seu nome é ${nome}, você tem ${idade} e pesa ${peso}`);
//valide o tipo da variavel
console.log(typeof(idade));
console.log(typeof(peso));
console.log(idade + peso);
//apos a conversao dos valores é possivel realizar
//calculos matematicos