//variaves globais e locais
function Nescola(){
    escola = 'Sesi'
    console.log(escola)
//variavel local
    var cidade = 'Andradina'
}
//variavel global pois pode ser acessada em qualquer parte do codigo
var escola = 'Senai'
console.log(escola)


Nescola()
var cidade = 'Mirandopolis'
console.log(cidade)

var x = 10 //variavel global
console.log(`Fora da função`, x)

function minhaF(){
    let x = 0; //variavel local
    x = x + 1;
    console.log(`Dentro da função`, x)
    
}
minhaF()
console.log(`Dentro da função`, x)
/////////////////////////////////////////////////////////////////////////
var x = 10 //variavel global
console.log(`Fora da função`, x)

function minhaF(){
    //Estamos usando a variavel global
    x = x + 1;
    console.log(`Dentro da função`, x)
    
}
minhaF()
x += 1
console.log(`Dentro da função`, x)