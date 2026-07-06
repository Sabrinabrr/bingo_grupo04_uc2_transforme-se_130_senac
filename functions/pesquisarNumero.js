const { database } = require("../db/database.js");

function pesquisarNumero(rl, callback) {
  rl.question("Digite o número que deseja pesquisar: ", function (numero) {
    if (numero > 75 || numero < 1) {
      console.log("Número inválido!");
    } else if (database.numerosSorteados.includes(Number(numero))) {
      console.log("O número foi sorteado!");
    } else {
      console.log("O número não foi sorteado!");
    }
    callback(); // avisa que terminou
  });
}

module.exports = {
  pesquisarNumero,
};
