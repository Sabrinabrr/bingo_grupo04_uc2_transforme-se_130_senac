// Menu do bingo

// importando funções
const { sortearNumeros } = require("./functions/sortearNumeros.js");
const { mostrarHistorico } = require("./functions/mostrarHistorico.js");
const { pesquisarNumero } = require("./functions/pesquisarNumero.js");
const { mostrarRegistroSistema } = require("./functions/mostrarRegistroSistema.js");
const { reiniciarBingo } = require("./functions/reiniciarBingo.js");

// importando biblioteca para receber dados no terminal
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// inicializando o sistema
console.log("==================");
console.log("BEM VINDO AO BINGO");

function menu() {
    
    console.log("\n[1] Sortear números");
    console.log("[2] Mostrar histórico");
    console.log("[3] Pesquisar se número foi chamado");
    console.log("[4] Mostrar registro do sistema");
    console.log("[5] Reiniciar bingo");
    console.log("[0] Encerrar o programa");
    rl.question("\nEscolha uma opção: ", function(escolha){
    
        if(escolha == 1){
            sortearNumeros();
            menu(); // reiniciando o menu
            
        } else if(escolha == 2) {
            mostrarHistorico();
            menu(); // reiniciando o menu
            
        } else if(escolha == 3) {
            pesquisarNumero();
            menu(); // reiniciando o menu
            
        } else if(escolha == 4) {
            mostrarRegistroSistema();
            menu(); // reiniciando o menu
            
        } else if(escolha == 5) {
            console.log("Bingo atual encerrado!");
            reiniciarBingo();
            menu(); // reiniciando o menu
        
        } else if(escolha == 0) {
            console.log("Fim algoritmo!");
            
        } else {
            console.log("escolha inválida!");
            menu(); // reiniciando o menu
        }
    });
}

menu(); // chamando função