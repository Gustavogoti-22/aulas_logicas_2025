const prompt = require('prompt-sync')();
let metros = Number(prompt('insira sua medição em metros: '))

let centimetro = metros * 100;
let milímetros = metros * 1000;
let quilômetros = metros / 1000;
console.log(`${metors} convertidos para centimetros ${centimetro}`);
console.log(`${metors} convertidos para milimetros ${milímetros}`);
console.log(`${metors} convertidos para quilometros ${quilômetros}`);