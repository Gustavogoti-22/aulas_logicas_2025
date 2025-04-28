let listaDeNomes = [];
function adicionarNome(nome) {
    listaDeNomes.push(nome);
    console.log(`Nome "${nome}" adicionado à lista.`);
}
function removerNome(nome) {
    let index = listaDeNomes.indexOf(nome);
    if (index !== -1) {
        listaDeNomes.splice(index, 1);
        console.log(`Nome "${nome}" removido da lista.`);
    } else {
        console.log(`Nome "${nome}" não encontrado na lista.`);
    }}
adicionarNome("Ricardo")
adicionarNome("Theu")
console.log(listaDeNomes)
removerNome("João Pedro")
console.log(listaDeNomes)
