const { database } = require("../db/database.js");

function mostrarRegistroSistema() {
    console.log("Quantidade de números disponíveis: ", database.numerosDisponiveis.length);
    console.log("Quantidade de números sorteados: ", database.numerosSorteados.length);
    console.log("Quantidade de números total: ", database.numerosDisponiveis.length + database.numerosSorteados.length)
}

module.exports = {
    mostrarRegistroSistema
};