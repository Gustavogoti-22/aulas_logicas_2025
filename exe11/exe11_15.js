function mostrarTabelaDivida(valorDivida) {
    const opcoesParcelas = [
        { parcelas: 1, juros: 0 },
        { parcelas: 3, juros: 10 },
        { parcelas: 6, juros: 15 },
        { parcelas: 9, juros: 20 },
        { parcelas: 12, juros: 25 }
    ]
    console.log("Parcelas | Juros (%) | Valor Juros | Valor Total | Valor da Parcela")
    console.log("---------------------------------------------------------------")
    opcoesParcelas.forEach(opcao => {
        let valorJuros = (valorDivida * opcao.juros) / 100;
        let valorTotal = valorDivida + valorJuros
        let valorParcela = valorTotal / opcao.parcelas

        console.log(`${opcao.parcelas.toString().padEnd(8)} | ${opcao.juros.toString().padEnd(10)} | R$ ${valorJuros.toFixed(2).padEnd(11)} | R$ ${valorTotal.toFixed(2).padEnd(10)} | R$ ${valorParcela.toFixed(2)}`);
    });
}
mostrarTabelaDivida(1000)
