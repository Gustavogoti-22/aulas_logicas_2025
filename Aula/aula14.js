let frutas = ['Maça','Banana','Uva','Abacaxi']
//a variavel x serve para iterar os valores ate o limite de lista, o nome n é obrigatorio ser o nome i, x ou contador
//pode ser qualquer nome de variavel
for(let x = 0; x < frutas.length; x++){
    //o length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)}
let lN = ['Bill Gates','Rafinha','Raul Seixas','Esteves','Vieira']
//para cada nome da lista nomes, escreva um nome
for(let nome of lN){
    console.log(nome)}

//verificando se é uma consoante
//lista de vogais
const prompt = require('prompt-sync')()
let vo = ['a','e','i','o','u']
let consoante = ['b','c','d','f','g','h','j','l','m','n','q','r','s','t','v','w','x','y','z']
let letra = prompt(`Digite uma letra: `)
//se letra estiver incluso na lista de vogais, identifico q é uma vogal
if(vo.includes(letra.toLowerCase())){
    console.log(`É uma vogal`)
}else if(consoante.includes(letra.toLowerCase())){
    console.log('Consoante')}
else[console.log(`Não é uma letra`)]

//obtendo a posição do item
for(let[pos,fruta] of frutas.entries()){
    //enteries retorna o par de cada elemento do vetor
    //ou seja a posição e a fruta
    console.log(`Posição ${pos} e fruta ${fruta}`)}
    
    //separando os itens em uma lista
    let produtos = `Celular, Notebook, Tv, Tablet, Hedset`
    //o split divide a string e forma uma lista a partir do limite no caso abaixo uma virgula 
    let listaP = produtos.split(',')
    for(let produto of listaP){
        console.log(produto)
    }

//percorrendo uma string como uma lista(lista decaracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra)
}