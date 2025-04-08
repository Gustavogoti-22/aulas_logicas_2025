let listaV = []
console.log(listaV);
let numeros = [1,2,3,4,5,6]
console.log(numeros);
console.log(numeros[2]);


//declaração de strings
let nomes = [`Ana`, 'João', 'Maria']
console.log(nomes);


//declaração mista
let listaM = [1, 'Dois', true, 2.5]
console.log(listaM);


let listaCL = [
    ['COCA-COLA', 'Cachorro-Quente'],
    [5.0, 10,0]
]
console.log(listaCL);



//alterando valores da lista
let frutas = ['Maça', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas);
frutas.push(`Laranja`)
console.log(frutas);



frutas = [...frutas, 'Banana']
console.log(frutas);

//a função splice adiciona um novo item em uma posição
//especificada a partir de um valor no indice
frutas.splice(2, 0, 'Morango')
console.log(frutas);


//excluindo item da lista
frutas.splice(3,1) //excloi pelo indice
console.log(frutas);
frutas.shift() //excluindo primeiro item da lista
frutas.pop() //excloi o ultimo
console.log(frutas);

//acessar itens da lista
console.log(frutas[3]); //acessar a partir da posição
console.log(frutas.slice(0,4));//posição 0 até 4
console.log(frutas.slice(1));//a partir da posição 1
console.log(frutas.slice(-1));//mostra os itens do fim para o inicio
console.log(frutas.length); //total de itens na lista 

//ordenar itens da lista
console.log(frutas);
frutas.sort()//ordenar lista de forma crescente
console.log(frutas);
frutas.reverse()//ordenando de forma decrescente
console.log(frutas);
