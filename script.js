// Implemente aqui as funções
function checkAbs(gender, abs) {
    if (gender === 'male') {
        return abs >= 41;
    } else if (gender === 'female') {
        return abs >= 41;
    }
    return false;
}

// Função para verificar o teste de natação
function checkSwim(swimDistance, swimTime, diveTime) {
    return (swimDistance >= 100 && swimTime <= 60) || diveTime <= 30;
}

// Função para verificar a altura
function checkHeight(gender, height) {
    return (gender === 'male' && height >= 1.70) || (gender === 'female' && height >= 1.60);
}

// Função para verificar o teste com barra
function checkBarTest(gender, barReps, barSeconds) {
    if (gender === 'male') {
        return barReps >= 6 || barSeconds >= 15;
    } else if (gender === 'female') {
        return barReps >= 5 || barSeconds >= 12;
    }
    return false;
}

// Função para verificar o teste de corrida
function checkRun(gender, runDistance, runTime) {
    if (gender === 'male') {
        return (runDistance >= 3000 && runTime <= 12 * 60) || (runDistance >= 5000 && runTime <= 20 * 60);
    } else if (gender === 'female') {
        return (runDistance >= 4000 && runTime <= 15 * 60) || (runDistance >= 6000 && runTime <= 22 * 60);
    }
    return false;
}




function areCandidateResultsValid() {

}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
  process.argv[2], // Genero
  process.argv[3], // Altura
  process.argv[4], // Repetições de barra
  process.argv[5], // Tempo de barra em segundos
  process.argv[6], // Abdominais
  process.argv[7], // Distancia percorrida em metros
  process.argv[8], // Tempo total da corrida em segundos
  process.argv[9], // Distancia do nado em metros
  process.argv[10], // Tempo total de nado em segundos
  process.argv[11] // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
areCandidateResultsValid(checkAbs(),checkBarTest,checkHeight,checkRun,checkSwim);
