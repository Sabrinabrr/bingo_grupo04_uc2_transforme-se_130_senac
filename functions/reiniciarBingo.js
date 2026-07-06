const { database } = require("../db/database.js"); // exportando a funcao de arrays do bingo

function reiniciarBingo() {
    // reiniciar histórico e números sorteados
    database.numerosDisponiveis = [];
    database.numerosSorteados = [];
    database.ultimoNumeroSorteado = 0;
    for (let i = 1; i <= 75; i++) {
        database.numerosDisponiveis.push(i);
    }
}

module.exports = {
    reiniciarBingo
};