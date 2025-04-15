let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = Math.floor(Math.random() * 100) + 1
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
    console.log("Número: " + numeros[i] + " | Dobro: " + (numeros[i] * 2));
}