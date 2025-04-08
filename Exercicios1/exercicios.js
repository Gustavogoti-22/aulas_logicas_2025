const prompt = require('prompt-sync')();
console.log("Bem-vindo ao curso de JavaScript!")
console.log('Estou aprendendo a usar o console.log')

console.log(15 + 25)
console.log(100 - 45)
console.log(12 * 7)
console.log(144 / 12)
console.log(20 % 3)
console.log(2 ** 5)





console.log(`Exercício`);
console.log('1');
let nomeAluno = "Gustavo Flores de Lima,"
let altura = 1.78
let escola = ", SESI CE025"
let ano = '2° médio'
console.log(`o aluno ${nomeAluno}, estuda na escola ${escola} e está no ${ano}`)

console.log('2')
let nome2 = 'Ricardo'
let materia = 'Senai'
let ano2 = 'em 2022'
console.log(`O professor ${nome2}, ensina a materia ${materia} e ingressou ${ano2}`);

nomeAluno = prompt(` Digite o nome do aluno? `)
altura = parseFloat(prompt('Digite a altura? '))
escola = prompt('Digite o nome da escola? ')
ano = parseInt(prompt('Digite o ano da turma? '))
console.log(`O aluno ${nomeAluno}, tem ${altura}, estuda na escola ${escola} e está no ${ano}`);




console.log('3')
professor = prompt(' Qual é seu nome? ')
materia = parseFloat(prompt(' qual materia você ensina? '))
console.log(`seu nome é ${professor}, a materia que você ensina é ${materia}`)


