
let contador = 1
while(contador <= 5){
console.log(`O contador é ${contador}`);
contador = contador + 1

}
console.log(`Fim`);

const prompt = require('prompt-sync')();
let senhaS = `12345`
while(true){
let senha = prompt(`Digite a senha: `)
if(senhaS == senha){
console.log(`Vc hackeou a senha`);
break
}else if(senha == `Desisto`){
break
}
}



let s = 0
let qtd = 0
let encerrar = `Sub-total`
while(encerrar == `Sub-total`){
let valor = Number(prompt(`Digite o valor do produto(0 para encerrar): `))
if(valor == 0){
break
}
else{
s = s + valor
qtd++
}
encerrar = prompt(`Deseja continuar: (Digite Sub-total)`)
}
console.log(`Foram informados ${qtd}`);
console.log(`Valor total dos produtos ${s.toFixed(2)}`);



let s2 = 0
let qtd2 = 0
let encerrar2 = `Sub-total`
while(encerrar2 == `Sub-total`){
let valor = Number(prompt(`Digite o valor do produto(0 para encerrar): `))
s2 = s2 + valor
qtd2++
encerrar2 = prompt(`Deseja continuar: (Digite Sub-total)`)
}
console.log(`Foram informados ${qtd2}`);
console.log(`Valor total dos produtos ${s2.toFixed(2)}`);


console.log(`###################################`);
console.log(`😶‍🌫️     JOGO DA ADIVINHAÇÃO      😶‍🌫️`);
console.log('###################################')
let nrS = Math.floor(Math.random() * 100 + 1)
let acertou = false
while(!acertou){
    const chute = parseInt(prompt(`😉 Digite um numero entre 1 e 100`))
    if(chute > nrS){
        console.log(`Voçê chutou ${chute}, tunte um numero ⬇️!`);
        
    }
    else if(chute < nrS){
        console.log(`Voçê chutou ${chute}, tunte um numero ⬆️!`);
    }
    else if(chute == nrS){
        console.log(`Voçê chutou ${chute}, parabéns vc acertou👌!`);
    }
}