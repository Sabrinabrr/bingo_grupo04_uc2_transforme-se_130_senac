// Banco de dados do bingo

const database = {
    numerosDisponiveis: [],
    numerosSorteados: [],
    ultimoNumeroSorteado: 0
};

// preenchendo os números disponíveis
for(let i = 1; i <= 75; i++) {
    database.numerosDisponiveis.push(i);
}

module.exports = {
    database
};