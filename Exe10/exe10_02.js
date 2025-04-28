let valorDolar = 5.69
let valorEuro = 6.46
function converterMoedas(valorReais) {
    let emDolar = valorReais / valorDolar;
    let emEuro = valorReais / valorEuro;

    console.log(`Valor em Reais: R$${valorReais.toFixed(2)}`);
    console.log(`Convertido para Dólar: US$${emDolar.toFixed(2)}`);
    console.log(`Convertido para Euro: €${emEuro.toFixed(2)}`);
}
converterMoedas(100)