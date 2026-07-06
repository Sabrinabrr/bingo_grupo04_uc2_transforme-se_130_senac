const {database} = require("../db/database.js")

function numerosSorteadosEmOrdem() {
	if(database.numerosSorteados.length === 0){
		console.log("Nenhum número sorteado ainda.")
	} else {
    console.log("Números sorteados em ordem: ", database.numerosSorteados.sort());
}

		
}

module.exports = {
    numerosSorteadosEmOrdem
}