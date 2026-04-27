const LIMITE_PESSOAS = 45;
let respostas = [];

document.getElementById('formPesquisa').addEventListener('submit', function(evento) {
    evento.preventDefault();

    if (respostas.length >= LIMITE_PESSOAS) {
        alert(`O limite de ${LIMITE_PESSOAS} respostas já foi atingido!`);
        return;
    }

    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = parseInt(document.getElementById('opiniao').value);

    respostas.push({ idade, sexo, opiniao });

    document.getElementById('contador').innerText = respostas.length;

    document.getElementById('idade').value = '';

    if (respostas.length === LIMITE_PESSOAS) {
        document.getElementById('btnEnviar').disabled = true;
        document.getElementById('btnEnviar').innerText = "Pesquisa Encerrada";
    }

    atualizarResultados();
});

function atualizarResultados() {
    if (respostas.length === 0) return;

    let somaIdades = 0;
    let maiorIdade = respostas[0].idade;
    let menorIdade = respostas[0].idade;
    let qtdPessimo = 0;
    let qtdOtimoBom = 0;
    let mulheres = 0;
    let homens = 0;
    let outros = 0;

    for (let i = 0; i < respostas.length; i++) {
        let resp = respostas[i];

        somaIdades += resp.idade;

        if (resp.idade > maiorIdade) maiorIdade = resp.idade;
        if (resp.idade < menorIdade) menorIdade = resp.idade;

        if (resp.opiniao === 1) qtdPessimo++;

        if (resp.opiniao === 4 || resp.opiniao === 3) qtdOtimoBom++;

        if (resp.sexo === 'feminino') mulheres++;
        else if (resp.sexo === 'masculino') homens++;
        else if (resp.sexo === 'outros') outros++;
    }

    const mediaIdade = somaIdades / respostas.length;
    const porcentagemOtimoBom = (qtdOtimoBom / respostas.length) * 100;

    document.getElementById('resMediaIdade').innerText = mediaIdade.toFixed(1);
    document.getElementById('resMaisVelho').innerText = maiorIdade;
    document.getElementById('resMaisNovo').innerText = menorIdade;
    document.getElementById('resPessimo').innerText = qtdPessimo;
    document.getElementById('resPctOtimoBom').innerText = porcentagemOtimoBom.toFixed(1);
    
    document.getElementById('resMulheres').innerText = mulheres;
    document.getElementById('resHomens').innerText = homens;
    document.getElementById('resOutros').innerText = outros;
}
