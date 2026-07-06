const { database } = require("../db/database.js");

function mostrarHistorico() {
    console.log("Números disponíveis: ", database.numerosDisponiveis);
    console.log("Números sorteados: ", database.numerosSorteados)
    console.log("Último número sorteado: ", database.ultimoNumeroSorteado);

}

module.exports = {
    mostrarHistorico
};