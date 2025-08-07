var treinos = [];
function registrarTreino(workout) {
    treinos.push(workout);
}
function listarTreinos(Exibir) {
    Exibir.forEach(function (workout) {
        console.log(workout);
    });
}
var treinoDeMusculacao = {
    tipo: "Treino de perna",
    duracao: 30,
    intensidade: "alta"
};
registrarTreino(treinoDeMusculacao);
listarTreinos(treinos);
