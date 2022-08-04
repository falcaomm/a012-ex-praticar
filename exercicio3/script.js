let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

if (nacionalidade === "brasileira" || nacionalidade === "brasileiro") {
    console.log("Brasileira");
} else if (nacionalidade === "argentina" || nacionalidade === "argentino") {
    console.log("Argentina");
} else if (nacionalidade === "uruguaia" || nacionalidade === "uruguaio") {
    console.log("Uruguaia");
} else if (nacionalidade === "chilena" || nacionalidade === "chileno") {
    console.log("Chilena");
} else if (nacionalidade === "colombiana" || nacionalidade === "colombiano") {
    console.log("Colombiana");
} else {
    console.log("nacionalidade não encontrada");
};


// MODO FLAVIA - OBJETO
// let nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase
// let nacionalidadesAceitas =
// {
//     um: "brasileira",
//     dois: 'argentina',
//     tres: 'urugaia',
//     quatro: 'chilena',
//     5: 'colombiana'
// }

// if (nacionalidade === nacionalidadesAceitas.um) {
//     console.log("A nacionalidade é", nacionalidadesAceitas.um);
// }
// else if (nacionalidade === nacionalidadesAceitas.dois) {
//     console.log("A nacionalidade é", nacionalidadesAceitas.dois);
// }
// else if (nacionalidade === nacionalidadesAceitas.tres) {
//     console.log("A nacionalidade é", nacionalidadesAceitas.tres);
// }
// else if (nacionalidade === nacionalidadesAceitas.quatro) {
//     console.log("A nacionalidade é", nacionalidadesAceitas.quatro);
// }
// else if (nacionalidade === nacionalidadesAceitas[5]) {
//     console.log("A nacionalidade é", nacionalidadesAceitas[5]);
// } else { console.log("nacionalidade não encontrada"); }


// MODO LEVIR - ARRAY
// let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

// const lista = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana", "brasileiro", "argentino", "uruguaio", "chileno", "colombiano"]

// if (lista.includes(nacionalidade)) {
//     console.log("Sua nacionalidade é", nacionalidade);
// } else {
//     console.log("nacionalidade não encontrada");
// };