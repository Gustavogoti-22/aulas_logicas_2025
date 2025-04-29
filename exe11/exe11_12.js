function separarParesImpares() {
    let numeros = [12, 7, 4, 9, 2]
    let pares = [];
    let impares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i])
        } else {
            impares.push(numeros[i])
        }
    }
    console.log("Números digitados:", numeros)
    console.log("Vetor de Pares:", pares)
    console.log("Vetor de Ímpares:", impares)
}
separarParesImpares()