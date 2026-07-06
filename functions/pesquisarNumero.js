const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pesquisarNumero() {
  rl.question("Digite o número que deseja pesquisar: ", function (numero) {
    if (numero > 75 || numero < 1) {
      console.log("Número inválido!");
      rl.close();
      return;
    }
    if (database.numerosSorteados.includes(numero)) {
      console.log("O número foi sorteado!");
    } else {
      console.log("O número não foi sorteado!");
    }
    rl.close();
  });
}

module.exports = {
  pesquisarNumero,
};
