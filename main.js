// Menu do bingo

// importando funções
const { sortearNumeros } = require("./functions/sortearNumeros.js");
const { mostrarHistorico } = require("./functions/mostrarHistorico.js");
const { pesquisarNumero } = require("./functions/pesquisarNumero.js");
const { mostrarRegistroSistema } = require("./functions/mostrarRegistroSistema.js");

// importando biblioteca para receber dados no terminal
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// inicializando o sistema
function menu() {
    
    console.log("==================");
    console.log("BEM VINDO AO BINGO\n");
    
    rl.question("Escolha uma opção: ", function(escolha){
    
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
            console.log("encerrar o programa!");
            
        } else {
            console.log("escolha inválida!");
            menu(); // reiniciando o menu
        }
    });
}

menu(); // chamando função