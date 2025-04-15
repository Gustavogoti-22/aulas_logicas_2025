const prompt = require('prompt-sync')();
function Cabecalho(texto){
    console.log(`---------------------`)
    console.log(     texto)
    console.log(`---------------------`)
}
//criando outra função, função de saudação
function Saudacao(){
    let nome = prompt(`Digite seu nome: `)
    console.log(`${nome}, tenha um bom dia.`);
    
}

//CHAMANDO a função 
Cabecalho(`     SESI/SENAI`)
let escola = `     Sesi-025`
Cabecalho(escola)
Saudacao()

//criei a função soma q ira recber dois valores como parametro, a partir desses valores, realizara o claculo e mostrar o resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado);
}
Soma(5, 6)
Soma(8, 9)
Soma(8, 18)



function ParImpar(nmr){
    if(nmr %2 == 0){ 
        console.log(`O numero ${nmr} é par`)
    }else{console.log(`O numero ${nmr} impar`)}}
ParImpar(2)
ParImpar(3)


function Media(n1, n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}
console.log(Media(6, 8));
let valor = Media(9, 7)
console.log(valor);
ParImpar(valor)