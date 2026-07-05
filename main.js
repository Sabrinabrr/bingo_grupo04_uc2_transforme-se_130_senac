// Menu do bingo
const { sortearNumeros } = require("./functions/sortearNumeros.js");
const { mostrarHistorico } = require("./functions/mostrarHistorico.js");
const { pesquisarNumero } = require("./functions/pesquisarNumero.js");
const { mostrarRegistroSistema } = require("./functions/mostrarRegistroSistema.js");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    let escolha;
    
    console.log("==================");
    console.log("BEM VINDO AO BINGO\n");
    
    rl.question("Escolha uma opção: ", function(escolha){
    
        if(escolha == 1){
            sortearNumeros();
            menu();
            
        } else if(escolha == 2) {
            mostrarHistorico();
            menu();
            
        } else if(escolha == 3) {
            pesquisarNumero();
            menu();
            
        } else if(escolha == 4) {
            mostrarRegistroSistema();
            menu();
            
        } else if(escolha == 5) {
            console.log("encerrar o programa!");
            
        } else {
            console.log("escolha inválida!");
            menu();
        }
    });
}

menu();