const { database } = require("../db/database.js"); // exportando a funcao de arrays do bingo

function sortearNumeros() {
    // lógica para sorteio e apresentação do número sorteado..
    // 1. Vamos questionar se há números a serem sorteados.
    if (database.numerosDisponiveis.length === 0) {
        console.log("Todos os números já foram sorteados.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * database.numerosDisponiveis.length);
    let numeroSorteado = database.numerosDisponiveis[indiceSorteado];
    console.log("Número sorteado:", numeroSorteado);
    database.numerosDisponiveis.splice(indiceSorteado, 1);
    database.numerosSorteados.push(numeroSorteado);
    database.ultimoNumeroSorteado = numeroSorteado;
    return numeroSorteado;
}

module.exports = { sortearNumeros };