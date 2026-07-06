const { database } = require("../db/database.js"); // exportando a funcao de arrays do bingo

function sortearNumeros() {
    // lógica para sorteio e apresentação do número sorteado..
    // 1. Vamos questionar se há números a serem sorteados.
    if (database.numerosDisponiveis.length === 0) {
        console.log("Todos os números já foram sorteados.");
        return;
    }
    // 2. Vamos sortear um número aleatório do array de números disponíveis.
    let indiceSorteado = Math.floor(Math.random() * database.numerosDisponiveis.length);
    let numeroSorteado = database.numerosDisponiveis[indiceSorteado];
    console.log("Número sorteado:", numeroSorteado);
    // 3. Vamos remover o número sorteado do array de números disponíveis.
    database.numerosDisponiveis.splice(indiceSorteado, 1);
    // 4. Vamos adicionar o número sorteado ao array de números sorteados.
    database.numerosSorteados.push(numeroSorteado);
    // 5. Vamos atualizar o último número sorteado.
    database.ultimoNumeroSorteado = numeroSorteado;
    return numeroSorteado;
}

module.exports = { sortearNumeros };