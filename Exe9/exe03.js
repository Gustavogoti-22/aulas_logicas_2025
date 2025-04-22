function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro: Não é possível dividir por zero!";
    }
    return num1 / num2;
}
console.log(divisao(10, 2))
console.log(divisao(10, 0))