function verificarSituacao(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4;
    let situacao = "";
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    console.log(`Média: ${media.toFixed(2)} - Situação: ${situacao}`);
}
verificarSituacao(6, 7, 5, 8);
