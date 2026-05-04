function calcularIMC(peso, altura) {
    if (altura > 0) {
        return peso / (altura * altura);
    }
    return 0;
}
function classificarIMC(imc) {
    if (imc < 18.5) {
        return { classificacao: "MAGREZA", grau: "0" };
    } else if (imc >= 18.5 && imc <= 24.9) {
        return { classificacao: "NORMAL", grau: "0" };
    } else if (imc >= 25.0 && imc <= 29.9) {
        return { classificacao: "SOBREPESO", grau: "I" };
    } else if (imc >= 30.0 && imc <= 39.9) {
        return { classificacao: "OBESIDADE", grau: "II" };
    } else {
        return { classificacao: "OBESIDADE GRAVE", grau: "III" };
    }
}
function processarIMC() {
    const alturaInput = document.getElementById("altura").value;
    const pesoInput = document.getElementById("peso").value;

    const altura = parseFloat(alturaInput);
    const peso = parseFloat(pesoInput);
    const divResultado = document.getElementById("resultado");

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        divResultado.style.display = "block";
        divResultado.style.backgroundColor = "#f8d7da";
        divResultado.style.color = "#721c24";
        divResultado.innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = calcularIMC(peso, altura);
    const dadosClassificacao = classificarIMC(imc);

    divResultado.style.display = "block";
    divResultado.style.backgroundColor = "#e2e3e5";
    divResultado.style.color = "#383d41";
    divResultado.innerHTML = `
        <strong>IMC:</strong> ${imc.toFixed(2)}<br>
        <strong>Classificação:</strong> ${dadosClassificacao.classificacao}<br>
        <strong>Obesidade (Grau):</strong> ${dadosClassificacao.grau}
    `;
}
