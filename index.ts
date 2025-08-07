interface Workout {
    tipo: string,
    duracao: number,
    intensidade: string
}

const treinos: Workout[] = []

function registrarTreino(workout:Workout){
    treinos.push(workout);
}

function listarTreinos(Exibir:Workout[]) {
    Exibir.forEach((workout) => {
        console.log(workout)
    });
}

const treinoDeMusculacao:Workout = {
    tipo: "Treino de perna",
    duracao: 30,
    intensidade: "alta"
}

registrarTreino(treinoDeMusculacao)

listarTreinos(treinos)