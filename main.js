// Menu do bingo

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
            console.log("escolheu 1");
            menu();
            
        } else if(escolha == 2) {
            console.log("escolheu 2");
            menu();
            
        } else if(escolha == 3) {
            console.log("escolheu 3");
            menu();
            
        } else if(escolha == 4) {
            console.log("escolheu 4");
            menu();
            
        } else if(escolha == 5) {
            console.log("escolheu sair");
            
        } else {
            console.log("escolha inválida!");
            menu();
        }
    });
}

menu();